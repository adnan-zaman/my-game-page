const { MockResponse, MockRequest } = require("../helpers/mocks");
const sinon = require("sinon");
const db = require("../../core/database");
const { expect } = require("chai");

const userSettingsController = require("../../controllers/userSettingsController");

describe("userSettingsController", function () {

  beforeEach(function () {
    this.res = new MockResponse();
    this.req = new MockRequest();
    this.nextFake = sinon.fake();
  });

  describe("validateUserId", function () {
    it("should send 400 error if req.params.userId is not number", function () {
      this.req.params.userId = "non";
      await userSettingsController.validateUserId(this.req, this.res, this.nextFake);
      expect(this.res.status.calledWith(400)).to.equal(true);
      expect(this.res.json.firstCall.firstArg).to.have.property('message');
      
    });
    it("should send 404 error if user is not found", function () {
      this.req.params.userId = "45";
      sinon.stub(db, 'getUserById');
      await userSettingsController.validateUserId(this.req, this.res, this.nextFake);
      expect(this.res.status.calledWith(404)).to.equal(true);
      expect(this.res.json.firstCall.firstArg).to.have.property('message');
      sinon.restore();
    });

    it("should call next if user is found", function () {
      this.req.params.userId = "45";
      sinon.stub(db, 'getUserById');
      db.getUserById.returns({id: 45, displayName: 'name', password:'password1', profilePic: '/images/pic1.jpg'});
      await userSettingsController.validateUserId(this.req, this.res, this.nextFake);
      expect(this.nextFake.callCount).to.equal(1);
      sinon.restore();
    });
  });

  describe("checkAuthentication", function () {
    it("should send 401 error if user is not authenticated", function () {
      this.req.isAuthenticated.returns(false);
      await userSettingsController.checkAuthentication(this.req, this.res, this.nextFake);
      expect(this.res.status.calledWith(401)).to.equal(true);
      expect(this.res.json.firstCall.firstArg).to.have.property('message');

    });
    it("should call next if user is authenticated", function () {
      this.req.isAuthenticated.returns(true);
      await userSettingsController.checkAuthentication(this.req, this.res, this.nextFake);
      expect(this.nextFake.callCount).to.equal(1);
    });
  });

  describe('verifyFilesExist', function() {
    it('should send 400 error if needed files are missing', function() {
      this.req.files.profilePicture = {name:'profile.jpg'};
      const middleware = userSettingsController.verifyFilesExist(['profilePicture', 'otherPicture']);
      middleware(this.req, this.res, this.nextFake);
      expect(this.res.status.calledWith(400)).to.equal(true);
      expect(this.res.json.firstCall.firstArg).to.have.property('message');

    });
    it('should call next if needed files exist', function() {
      this.req.files.profilePicture = {name:'profile.jpg'};
      this.req.files.otherPicture = {name:'profile.jpg'};
      const middleware = userSettingsController.verifyFilesExist(['otherPicture', 'profilePicture']);
      middleware(this.req, this.res, this.nextFake);
      expect(this.nextFake.callCount).to.equal(1);
    })
  });

  describe("validateMimeTypes", function () {

    it("should call next if file's type is valid", function () {
      this.req.files.profilePicture = {mimetype:'image/png'};
      this.req.files.other = {name:'application/pdf'};
      const middleware = userSettingsController.validateMimeTypes({profilePicture: 'image', other: 'application'});
      middleware(this.req, this.res, this.nextFake);
      expect(this.nextFake.callCount).to.equal(1);
    });

    it("should call next if file's subtype is valid", function () {
      this.req.files.profilePicture = {mimetype:'image/png'};
      this.req.files.other = {name:'application/pdf'};
      const middleware = userSettingsController.validateMimeTypes({profilePicture: 'image/png', other: 'application/pdf'});
      middleware(this.req, this.res, this.nextFake);
      expect(this.nextFake.callCount).to.equal(1);
    });

    it("should send 400 error if file's type is invalid", function () {
      this.req.files.profilePicture = {mimetype:'image/png'};
      this.req.files.other = {name:'application/pdf'};
      const middleware = userSettingsController.validateMimeTypes({profilePicture: 'image', other: 'image'});
      middleware(this.req, this.res, this.nextFake);
      expect(this.res.status.calledWith(400)).to.equal(true);
      expect(this.res.json.firstCall.firstArg).to.have.property('message');
    });

    it("should send 400 if file's subtype is invalid", function () {
      this.req.files.profilePicture = {mimetype:'image/png'};
      this.req.files.other = {name:'application/pdf'};
      const middleware = userSettingsController.validateMimeTypes({profilePicture: 'image/jpg', other: 'application/pdf'});
      middleware(this.req, this.res, this.nextFake);
      expect(this.res.status.calledWith(400)).to.equal(true);
      expect(this.res.json.firstCall.firstArg).to.have.property('message');
    });
  });

  describe("validateFileSizes", function () {
    it("should send 413 error if file is too large", function () {
      this.req.files.profilePicture = {size: 3000000}
      this.req.files.other = {size: 5000000}
      const middleware = userSettingsController.validateFileSizes({profilePicture: 5000000, other: 1000000});
      middleware(this.req, this.res, this.nextFake);
      expect(this.res.status.calledWith(413)).to.equal(true);
      expect(this.res.json.firstCall.firstArg).to.have.property('message');
    });

    it("should call next if file size is okay", function () {
      this.req.files.profilePicture = {size: 5000000}
      this.req.files.other = {size: 5000000}
      const middleware = userSettingsController.validateFileSizes({profilePicture: 5000000, other: 5000000});
      middleware(this.req, this.res, this.nextFake);
      expect(this.nextFake.callCount).to.equal(1);
    });
  });

  describe("saveProfilePicture", function () {
    it("profilePicFileName added to req", function () {
      this.req.user = {id: 42};
      this.req.files.profilePicture = {name: 'pic.jpg'};
      await userSettingsController.saveProfilePicture(this.req, this.res, this.nextFake);
      expect(this.req).to.have.property('profilePicFileName');
    });
    it("generated name contains user id", function () {
      this.req.user = {id: 42};
      this.req.files.profilePicture = {name: 'pic.jpg'};
      await userSettingsController.saveProfilePicture(this.req, this.res, this.nextFake);
      expect(this.req.profilePicFileName).to.include(42);
    });
    it("saved file is right extension", function () {
      this.req.user = {id: 42};
      this.req.files.profilePicture = {name: 'pic.jpg'};
      await userSettingsController.saveProfilePicture(this.req, this.res, this.nextFake);
      expect(this.req.profilePicFileName).to.include('.jpg');
    });
    
    it("should call next", function () {
      this.req.user = {id: 42};
      this.req.files.profilePicture = {name: 'pic.jpg'};
      await userSettingsController.saveProfilePicture(this.req, this.res, this.nextFake);
      expect(this.nextFake.callCount).to.equal(1);
    });
  });

  describe("updateProfilePicInDatabase", function () {
    it("should update db if profile pic is different", function () {
      this.req.user = {id: 42, profilePic : '/images/default.jpg'};
      this.req.profilePicFileName = '/images/42-profilepic.png';
      sinon.stub(db.updateUser);
      await userSettingsController.updateProfilePicInDatabase(this.req, this.res, this.nextFake);
      expect(db.updateUser.callCount).to.equal(1);
      const args = db.updateUser.args[0];
      expect(args[0]).to.equal(42);
      expect(args[1]).to.deep.equal({profilePic: '/images/42-profilepic.png'});
      expect(this.nextFake.callCount).to.equal(1);

    });
    it("should not update db if profile pic is same", function () {
      this.req.user = {id: 42, profilePic : '/images/42-profilepic.png'};
      this.req.profilePicFileName = '/images/42-profilepic.png';
      sinon.stub(db.updateUser);
      await userSettingsController.updateProfilePicInDatabase(this.req, this.res, this.nextFake);
      expect(db.updateUser.callCount).to.equal(0);
      expect(this.nextFake.callCount).to.equal(1);
    });
  });

  describe("sendSuccessMessage", function () {
    it("should send message with right format", function () {
      const middleware = userSettingsController.sendSuccessMessage('wow thats good');
      await middleware(this.req, this.res);
      expect(this.res.json.firstCall.firstArg).to.deep.equal({message: 'wow thats good'});
    });
    it("should set status to 200", function () {
      const middleware = userSettingsController.sendSuccessMessage('wow thats good');
      await middleware(this.req, this.res);
      expect(this.res.status.firstCall.firstCall).to.equal(200);
    });
  });
});

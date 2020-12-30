/*
    -call ChangeFavoriteGameRank(uid, gid, newRank)
    questions to consider
      when games swap places
      when games are removed
      when games are added

      hash = {}
      oldFaveGames = GetUsersFaveGames(req.params.id)
 
      for i=0 -> req.body.len
        if !hash[req.body[i]]
          AddFaveGame(:id, req.body[i], i+1)
        else if hash[req.body[i]] !== i+1
          ChangeFaveGameRank(:id, req.body[i], i+1)
          del hash[req.body[i]]

      for gid in hash.keys
        RemoveFaveGame(:id, gid);

  */

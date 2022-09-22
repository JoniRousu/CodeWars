// Min number of participants for handshakes

function getParticipants(handshakes){
    let participants = 2 // less than 2 does not make sense
    
    if(handshakes <= 0) {
      return 0
    } else {
        while(handshakes > ((participants*(participants-1))/2)) {
            participants++
        }
    }
    return participants
  }
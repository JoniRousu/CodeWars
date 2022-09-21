// Min number of participants for handshakes

function getParticipants(handshakes){
    if(handshakes <= 0) {
      return 0
    } else {
        participants = 2
        while(true) {
            maxHandshakes = (participants*(participants-1))/2
            if (maxHandshakes >= handshakes){
                return participants
            } else {
                participants++
            }
        }
    }
    return 0
  }
class User {
    constructor () {
        this.progress = 0;
        this.RankValues = [-8,-7,-6,-5,-4,-3,-2,-1,1,2,3,4,5,6,7,8];
        this.rank = this.RankValues[0];
    }

    incProgress(rank) {
        if (this.RankValues.indexOf(rank) === -1) {
            throw 'Invalid rank';
        } 
        if(this.rank < 8) {
            let d = this.RankValues.indexOf(rank)-this.RankValues.indexOf(this.rank);

            if (d > -2) {
                switch (d) {
                    case 0: this.progress += 3; break;
                    case -1: this.progress += 1; break;
                    default: this.progress += 10*d*d; break;
                }

                while (this.progress >= 100) {
                    this.progress -= 100;
                    if (this.rank === 7) {
                        this.progress = 0;
                        this.rank = 8;
                    } else {
                        this.rank = this.RankValues[this.RankValues.indexOf(this.rank)+1];
                    }
                }
            }
        }
    }
}
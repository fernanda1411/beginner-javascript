/* Team Stats
We want to create and extract information about your 
favorite sports team. Basketball, soccer, tennis, or 
water polo, you pick it. It’’s your job to create data 
using the JavaScript data structures at your disposal: 
arrays, objects, etc.

Once created, you can manipulate these data structures 
as well as gain insights from them. For example, you might 
want to get the total number of games your team has played, 
or the average score of all of their games. */

const team = {
    _players: [
      {
        firstName: 'Vini',
        lastName: 'Santana',
        age: 38
      },
      
      {
        firstName: 'Fernanda',
        lastName: 'Silva',
        age: 31
      },
      
      {
        firstName: 'Bro',
        lastName: 'Auauau',
        age: 6
      }
    ],
    _games: [
      {
        opponent: 'Broncos',
        teamPoints: 42,
        opponentPoints: 27
      },
      
      {
        opponent: 'Wolves',
        teamPoints: 23,
        opponentPoints: 20
      },
      
      {
        opponent: 'Lions',
        teamPoints: 15,
        opponentPoints: 18
      } 
    ],
    get games() {
      return this._players;
    },
    get games() {
      return this._games;
    },
    
    addPlayer(firstName, lastName, age) {
      let player = {
        firstName: firstName,
        lastName: lastName,
        age: age
      };
      this._players.push(player);
    },
    
    addGame(oppName, points, oppPoints){
      const game = {
        opponent: oppName,
        points: points,
        opponentPoints: oppPoints
      }
    }
  };
  
  team.addPlayer("Steph", "Curry", 28);
  team.addPlayer("Lisa", "Leslie", 44);
  team.addPlayer("Bugs", "Bunny", 76);
  
  //console.log(team._players);
  
  team.addGame("Sea Lions", 100, 50);
  team.addGame("Wolves", 56, 90);
  team.addGame("Tigers", 30, 47);
  
  console.log(team.games);
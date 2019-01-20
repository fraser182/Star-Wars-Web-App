const PubSub = require('../helpers/pub_sub.js');
const Request = require('../helpers/request.js');

const Characters = function(){
  this.characters = [];
};

Characters.prototype.getData = function(){
  const request1 = new Request('https://swapi.co/api/people/');
  request1.get().then((charactersData1) => {
    this.characters = charactersData1.results;
    console.log('getCharactersData1', charactersData1.results);

    const request2 = new Request('https://swapi.co/api/people/?page=2');
    request2.get().then((charactersData2) => {
      this.characters = this.characters.concat(charactersData2.results);
      console.log('getCharactersData2', charactersData2.results);

      const request3 = new Request('https://swapi.co/api/people/?page=3');
      request3.get().then((charactersData3) => {
        this.characters = this.characters.concat(charactersData3.results);
        console.log('getCharactersData3', charactersData3.results);

        const request4 = new Request('https://swapi.co/api/people/?page=4');
        request4.get().then((charactersData4) => {
          this.characters = this.characters.concat(charactersData4.results);
          console.log('getCharactersData4', charactersData4.results);

          const request5 = new Request('https://swapi.co/api/people/?page=5');
          request5.get().then((charactersData5) => {
            this.characters = this.characters.concat(charactersData5.results);
            console.log('getCharactersData5', charactersData5.results);

            const request6 = new Request('https://swapi.co/api/people/?page=6');
            request6.get().then((charactersData6) => {
              this.characters = this.characters.concat(charactersData6.results);
              console.log('getCharactersData6', charactersData6.results);

              const request7 = new Request('https://swapi.co/api/people/?page=7');
              request7.get().then((charactersData7) => {
                this.characters = this.characters.concat(charactersData7.results);
                console.log('getCharactersData7', charactersData7.results);

                const request8 = new Request('https://swapi.co/api/people/?page=8');
                request8.get().then((charactersData8) => {
                  this.characters = this.characters.concat(charactersData8.results);
                  console.log('getCharactersData8', charactersData8.results);

                  const request9 = new Request('https://swapi.co/api/people/?page=9');
                  request9.get().then((charactersData9) => {
                    this.characters = this.characters.concat(charactersData9.results);
                    console.log('getCharactersData9', charactersData9.results);
                  }).then(() => {
                    PubSub.publish('Characters:characters-loaded', this.characters);
                  });
                });
              });
            })
          });
        });
      });
    });
  });
};

module.exports = Characters;

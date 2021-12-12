export const HEgg = () => {
  const h_name = 'month'
  var h_ip = ''

  document.addEventListener("keypress", function (event) {
    if (event.key === 'm') {
      h_ip+='m';
      document.addEventListener("keypress", function (event) {
        if (event.key === 'o') {
          h_ip+='o';
          document.addEventListener("keypress", function (event) {
            if (event.key === 'n') {
              h_ip+='n';
              document.addEventListener("keypress", function (event) {
                if (event.key === 't') {
                  h_ip+='t';
                  document.addEventListener("keypress", function (event) {
                    if (event.key === 'h') {
                      h_ip+='h';
                      if(h_ip === h_name) {
                        Egg();
                      } 
                    }
                  })
                }
              })
            }
          })
        }
      })
    }
  })
};


export const motherland = () => {
  window.open("https://youtu.be/U06jlgpMtQs", "_blank");
}

const Egg = () => {
    window.open("https://youtu.be./dQw4w9WgXcQ", "_blank");
};

export const FEgg = () => {
  const f_name = 'ab'
  var f_ip = ''

  document.addEventListener("keypress", function (event) {
    if (event.key === 'a') {
      f_ip+='a';
      document.addEventListener("keypress", function (event) {
        if (event.key === 'b') {
          f_ip+='b';
          if(f_ip === f_name) {
            Egg();
          } 
        }
      })
    }
  })
}

export const AEgg = () => {
  const a_name = 'di'
  var a_ip = ''

  document.addEventListener("keypress", function (event) {
    if (event.key === 'd') {
      a_ip+='d';
      document.addEventListener("keypress", function (event) {
        if (event.key === 'i') {
          a_ip+='i';
          if(a_ip === a_name) {
            Egg();
          } 
        }
      })
    }
  })
}

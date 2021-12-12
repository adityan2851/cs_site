export const HEgg = () => {
  const h_name = "month";
  var h_ip = "";
  const HEggLink = "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1";

  document.addEventListener("keypress", function (event) {
    if (event.key === "m") {
      h_ip += "m";
      document.addEventListener("keypress", function (event) {
        if (event.key === "o") {
          h_ip += "o";
          document.addEventListener("keypress", function (event) {
            if (event.key === "n") {
              h_ip += "n";
              document.addEventListener("keypress", function (event) {
                if (event.key === "t") {
                  h_ip += "t";
                  document.addEventListener("keypress", function (event) {
                    if (event.key === "h") {
                      h_ip += "h";
                      if (h_ip === h_name) {
                        window.open(HEggLink, "_blank");
                      }
                    }
                  });
                }
              });
            }
          });
        }
      });
    }
  });
};

export const FEgg = () => {
  const f_name = "ab";
  var f_ip = "";
  const FEggLink =
    "https://www.youtube.com/embed/MXtMSjCpoZ8?start=236&end=268&autoplay=1";

  document.addEventListener("keypress", function (event) {
    if (event.key === "a") {
      f_ip += "a";
      document.addEventListener("keypress", function (event) {
        if (event.key === "b") {
          f_ip += "b";
          if (f_ip === f_name) {
            window.open(FEggLink, "_blank");
          }
        }
      });
    }
  });
};

export const AEgg = () => {
  const a_name = "di";
  var a_ip = "";

  const AEggLink =
    "https://www.youtube.com/embed/U06jlgpMtQs?start=1&autoplay=1";

  document.addEventListener("keypress", function (event) {
    if (event.key === "d") {
      a_ip += "d";
      document.addEventListener("keypress", function (event) {
        if (event.key === "i") {
          a_ip += "i";
          if (a_ip === a_name) {
            window.open(AEggLink, "_blank");
          }
        }
      });
    }
  });
};

export const test = () => {
  window.open("https://www.youtube.com/embed/MXtMSjCpoZ8", "_blank");
};

const Egg = (link) => {
  window.open(link, "_blank");
};

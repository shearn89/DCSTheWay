export default function getModuleCommands(module, waypoints) {
  switch (module) {
    case "F-16C_50": {
      let payload = [
        {
          device: 17,
          code: 3032,
          delay: 100,
          activate: -1,
          addDepress: "true",
        },
        {
          device: 17,
          code: 3006,
          delay: 100,
          activate: 1,
          addDepress: "true",
        },
      ];
      for (const waypoint of waypoints) {
        payload.push(
          {
            device: 17,
            code: 3030,
            delay: 100,
            activate: 1,
            addDepress: "true",
          },
          {
            device: 17,
            code: 3035,
            delay: 100,
            activate: -1,
            addDepress: "true",
          },
          {
            device: 17,
            code: 3035,
            delay: 100,
            activate: -1,
            addDepress: "true",
          }
        );
        //Type hem
        if (waypoint.latHem === "N") {
          payload.push({
            device: 17,
            code: 3004,
            delay: 100,
            activate: 1,
            addDepress: "true",
          });
        } else {
          payload.push({
            device: 17,
            code: 3010,
            delay: 100,
            activate: 1,
            addDepress: "true",
          });
        }
        //Type lat
        for (let i = 0; i < waypoint.lat.length; i++) {
          // eslint-disable-next-line default-case
          switch (waypoint.lat.charAt(i)) {
            case "1":
              payload.push({
                device: 17,
                code: 3003,
                delay: 100,
                activate: 1,
                addDepress: "true",
              });
              break;
            case "2":
              payload.push({
                device: 17,
                code: 3004,
                delay: 100,
                activate: 1,
                addDepress: "true",
              });
              break;
            case "3":
              payload.push({
                device: 17,
                code: 3005,
                delay: 100,
                activate: 1,
                addDepress: "true",
              });
              break;
            case "4":
              payload.push({
                device: 17,
                code: 3006,
                delay: 100,
                activate: 1,
                addDepress: "true",
              });
              break;
            case "5":
              payload.push({
                device: 17,
                code: 3007,
                delay: 100,
                activate: 1,
                addDepress: "true",
              });
              break;
            case "6":
              payload.push({
                device: 17,
                code: 3008,
                delay: 100,
                activate: 1,
                addDepress: "true",
              });
              break;
            case "7":
              payload.push({
                device: 17,
                code: 3009,
                delay: 100,
                activate: 1,
                addDepress: "true",
              });
              break;
            case "8":
              payload.push({
                device: 17,
                code: 3010,
                delay: 100,
                activate: 1,
                addDepress: "true",
              });
              break;
            case "9":
              payload.push({
                device: 17,
                code: 3011,
                delay: 100,
                activate: 1,
                addDepress: "true",
              });
              break;
            case "0":
              payload.push({
                device: 17,
                code: 3002,
                delay: 100,
                activate: 1,
                addDepress: "true",
              });
              break;
          }
        }
        //enter
        payload.push({
          device: 17,
          code: 3016,
          delay: 100,
          activate: 1,
          addDepress: "true",
        });
        //dobber to long
        payload.push({
          device: 17,
          code: 3035,
          delay: 100,
          activate: -1,
          addDepress: "true",
        });
        //Type hem
        if (waypoint.longHem === "E") {
          payload.push({
            device: 17,
            code: 3008,
            delay: 100,
            activate: 1,
            addDepress: "true",
          });
        } else {
          payload.push({
            device: 17,
            code: 3006,
            delay: 100,
            activate: 1,
            addDepress: "true",
          });
        }
        //type long
        for (let i = 0; i < waypoint.long.length; i++) {
          // eslint-disable-next-line default-case
          switch (waypoint.long.charAt(i)) {
            case "1":
              payload.push({
                device: 17,
                code: 3003,
                delay: 100,
                activate: 1,
                addDepress: "true",
              });
              break;
            case "2":
              payload.push({
                device: 17,
                code: 3004,
                delay: 100,
                activate: 1,
                addDepress: "true",
              });
              break;
            case "3":
              payload.push({
                device: 17,
                code: 3005,
                delay: 100,
                activate: 1,
                addDepress: "true",
              });
              break;
            case "4":
              payload.push({
                device: 17,
                code: 3006,
                delay: 100,
                activate: 1,
                addDepress: "true",
              });
              break;
            case "5":
              payload.push({
                device: 17,
                code: 3007,
                delay: 100,
                activate: 1,
                addDepress: "true",
              });
              break;
            case "6":
              payload.push({
                device: 17,
                code: 3008,
                delay: 100,
                activate: 1,
                addDepress: "true",
              });
              break;
            case "7":
              payload.push({
                device: 17,
                code: 3009,
                delay: 100,
                activate: 1,
                addDepress: "true",
              });
              break;
            case "8":
              payload.push({
                device: 17,
                code: 3010,
                delay: 100,
                activate: 1,
                addDepress: "true",
              });
              break;
            case "9":
              payload.push({
                device: 17,
                code: 3011,
                delay: 100,
                activate: 1,
                addDepress: "true",
              });
              break;
            case "0":
              payload.push({
                device: 17,
                code: 3002,
                delay: 100,
                activate: 1,
                addDepress: "true",
              });
              break;
          }
        }
        //enter
        payload.push({
          device: 17,
          code: 3016,
          delay: 100,
          activate: 1,
          addDepress: "true",
        });
        //dobber to elev
        payload.push({
          device: 17,
          code: 3035,
          delay: 100,
          activate: -1,
          addDepress: "true",
        });
        //type elev
        for (let i = 0; i < waypoint.elev.length; i++) {
          // eslint-disable-next-line default-case
          switch (waypoint.elev.charAt(i)) {
            case "1":
              payload.push({
                device: 17,
                code: 3003,
                delay: 100,
                activate: 1,
                addDepress: "true",
              });
              break;
            case "2":
              payload.push({
                device: 17,
                code: 3004,
                delay: 100,
                activate: 1,
                addDepress: "true",
              });
              break;
            case "3":
              payload.push({
                device: 17,
                code: 3005,
                delay: 100,
                activate: 1,
                addDepress: "true",
              });
              break;
            case "4":
              payload.push({
                device: 17,
                code: 3006,
                delay: 100,
                activate: 1,
                addDepress: "true",
              });
              break;
            case "5":
              payload.push({
                device: 17,
                code: 3007,
                delay: 100,
                activate: 1,
                addDepress: "true",
              });
              break;
            case "6":
              payload.push({
                device: 17,
                code: 3008,
                delay: 100,
                activate: 1,
                addDepress: "true",
              });
              break;
            case "7":
              payload.push({
                device: 17,
                code: 3009,
                delay: 100,
                activate: 1,
                addDepress: "true",
              });
              break;
            case "8":
              payload.push({
                device: 17,
                code: 3010,
                delay: 100,
                activate: 1,
                addDepress: "true",
              });
              break;
            case "9":
              payload.push({
                device: 17,
                code: 3011,
                delay: 100,
                activate: 1,
                addDepress: "true",
              });
              break;
            case "0":
              payload.push({
                device: 17,
                code: 3002,
                delay: 100,
                activate: 1,
                addDepress: "true",
              });
              break;
          }
        }
        //enter
        payload.push({
          device: 17,
          code: 3016,
          delay: 100,
          activate: 1,
          addDepress: "true",
        });
        //back to steerpoint field
        payload.push(
          {
            device: 17,
            code: 3034,
            delay: 100,
            activate: 1,
            addDepress: "true",
          },
          {
            device: 17,
            code: 3034,
            delay: 100,
            activate: 1,
            addDepress: "true",
          },
          {
            device: 17,
            code: 3034,
            delay: 100,
            activate: 1,
            addDepress: "true",
          },
          {
            device: 17,
            code: 3034,
            delay: 100,
            activate: 1,
            addDepress: "true",
          }
        );
      }

      //main page
      payload.push({
        device: 17,
        code: 3032,
        delay: 100,
        activate: -1,
        addDepress: "true",
      });

      return payload;
    }
    case "AH-64D_BLK_II": {
      let payload = [];
      return [];
    }
    case "A-10C_2":
    case "A-10C": {
      let payload = [
        {
          device: 9,
          code: 3011,
          delay: 100,
          activate: 1,
          addDepress: "true",
        },
        {
          device: 9,
          code: 3005,
          delay: 100,
          activate: 1,
          addDepress: "true",
        },
      ];

      for (const waypoint of waypoints) {
        payload.push({
          device: 9,
          code: 3007,
          delay: 100,
          activate: 1,
          addDepress: "true",
        });
        //Type hem
        if (waypoint.latHem === "N") {
          payload.push({
            device: 9,
            code: 3040,
            delay: 100,
            activate: 1,
            addDepress: "true",
          });
        } else {
          payload.push({
            device: 9,
            code: 3045,
            delay: 100,
            activate: 1,
            addDepress: "true",
          });
        }
        //Type lat
        for (let i = 0; i < waypoint.lat.length; i++) {
          // eslint-disable-next-line default-case
          switch (waypoint.lat.charAt(i)) {
            case "1":
              payload.push({
                device: 9,
                code: 3015,
                delay: 100,
                activate: 1,
                addDepress: "true",
              });
              break;
            case "2":
              payload.push({
                device: 9,
                code: 3016,
                delay: 100,
                activate: 1,
                addDepress: "true",
              });
              break;
            case "3":
              payload.push({
                device: 9,
                code: 3017,
                delay: 100,
                activate: 1,
                addDepress: "true",
              });
              break;
            case "4":
              payload.push({
                device: 9,
                code: 3018,
                delay: 100,
                activate: 1,
                addDepress: "true",
              });
              break;
            case "5":
              payload.push({
                device: 9,
                code: 3019,
                delay: 100,
                activate: 1,
                addDepress: "true",
              });
              break;
            case "6":
              payload.push({
                device: 9,
                code: 3020,
                delay: 100,
                activate: 1,
                addDepress: "true",
              });
              break;
            case "7":
              payload.push({
                device: 9,
                code: 3021,
                delay: 100,
                activate: 1,
                addDepress: "true",
              });
              break;
            case "8":
              payload.push({
                device: 9,
                code: 3022,
                delay: 100,
                activate: 1,
                addDepress: "true",
              });
              break;
            case "9":
              payload.push({
                device: 9,
                code: 3023,
                delay: 100,
                activate: 1,
                addDepress: "true",
              });
              break;
            case "0":
              payload.push({
                device: 9,
                code: 3024,
                delay: 100,
                activate: 1,
                addDepress: "true",
              });
              break;
          }
        }
        payload.push({
          device: 9,
          code: 3003,
          delay: 100,
          activate: 1,
          addDepress: "true",
        });
        //Type hem
        if (waypoint.latHem === "E") {
          payload.push({
            device: 9,
            code: 3031,
            delay: 100,
            activate: 1,
            addDepress: "true",
          });
        } else {
          payload.push({
            device: 9,
            code: 3049,
            delay: 100,
            activate: 1,
            addDepress: "true",
          });
        }
        //Type long
        for (let i = 0; i < waypoint.long.length; i++) {
          // eslint-disable-next-line default-case
          switch (waypoint.long.charAt(i)) {
            case "1":
              payload.push({
                device: 9,
                code: 3015,
                delay: 100,
                activate: 1,
                addDepress: "true",
              });
              break;
            case "2":
              payload.push({
                device: 9,
                code: 3016,
                delay: 100,
                activate: 1,
                addDepress: "true",
              });
              break;
            case "3":
              payload.push({
                device: 9,
                code: 3017,
                delay: 100,
                activate: 1,
                addDepress: "true",
              });
              break;
            case "4":
              payload.push({
                device: 9,
                code: 3018,
                delay: 100,
                activate: 1,
                addDepress: "true",
              });
              break;
            case "5":
              payload.push({
                device: 9,
                code: 3019,
                delay: 100,
                activate: 1,
                addDepress: "true",
              });
              break;
            case "6":
              payload.push({
                device: 9,
                code: 3020,
                delay: 100,
                activate: 1,
                addDepress: "true",
              });
              break;
            case "7":
              payload.push({
                device: 9,
                code: 3021,
                delay: 100,
                activate: 1,
                addDepress: "true",
              });
              break;
            case "8":
              payload.push({
                device: 9,
                code: 3022,
                delay: 100,
                activate: 1,
                addDepress: "true",
              });
              break;
            case "9":
              payload.push({
                device: 9,
                code: 3023,
                delay: 100,
                activate: 1,
                addDepress: "true",
              });
              break;
            case "0":
              payload.push({
                device: 9,
                code: 3024,
                delay: 100,
                activate: 1,
                addDepress: "true",
              });
              break;
          }
        }
        payload.push({
          device: 9,
          code: 3004,
          delay: 100,
          activate: 1,
          addDepress: "true",
        });
        //Type name
        for (let i = 0; i < waypoint.name.length; i++) {
          // eslint-disable-next-line default-case
          switch (waypoint.name.charAt(i)) {
            case "1":
              payload.push({
                device: 9,
                code: 3015,
                delay: 100,
                activate: 1,
                addDepress: "true",
              });
              break;
            case "2":
              payload.push({
                device: 9,
                code: 3016,
                delay: 100,
                activate: 1,
                addDepress: "true",
              });
              break;
            case "3":
              payload.push({
                device: 9,
                code: 3017,
                delay: 100,
                activate: 1,
                addDepress: "true",
              });
              break;
            case "4":
              payload.push({
                device: 9,
                code: 3018,
                delay: 100,
                activate: 1,
                addDepress: "true",
              });
              break;
            case "5":
              payload.push({
                device: 9,
                code: 3019,
                delay: 100,
                activate: 1,
                addDepress: "true",
              });
              break;
            case "6":
              payload.push({
                device: 9,
                code: 3020,
                delay: 100,
                activate: 1,
                addDepress: "true",
              });
              break;
            case "7":
              payload.push({
                device: 9,
                code: 3021,
                delay: 100,
                activate: 1,
                addDepress: "true",
              });
              break;
            case "8":
              payload.push({
                device: 9,
                code: 3022,
                delay: 100,
                activate: 1,
                addDepress: "true",
              });
              break;
            case "9":
              payload.push({
                device: 9,
                code: 3023,
                delay: 100,
                activate: 1,
                addDepress: "true",
              });
              break;
            case "0":
              payload.push({
                device: 9,
                code: 3024,
                delay: 100,
                activate: 1,
                addDepress: "true",
              });
              break;
            case " ":
              payload.push({
                device: 9,
                code: 3057,
                delay: 100,
                activate: 1,
                addDepress: "true",
              });
              break;
            case ".":
            case ",":
              payload.push({
                device: 9,
                code: 3025,
                delay: 100,
                activate: 1,
                addDepress: "true",
              });
              break;
            case "/":
              payload.push({
                device: 9,
                code: 3026,
                delay: 100,
                activate: 1,
                addDepress: "true",
              });
              break;
            case "a":
            case "A":
              payload.push({
                device: 9,
                code: 3027,
                delay: 100,
                activate: 1,
                addDepress: "true",
              });
              break;
            case "b":
            case "B":
              payload.push({
                device: 9,
                code: 3028,
                delay: 100,
                activate: 1,
                addDepress: "true",
              });
              break;
            case "c":
            case "C":
              payload.push({
                device: 9,
                code: 3029,
                delay: 100,
                activate: 1,
                addDepress: "true",
              });
              break;
            case "d":
            case "D":
              payload.push({
                device: 9,
                code: 3030,
                delay: 100,
                activate: 1,
                addDepress: "true",
              });
              break;
            case "e":
            case "E":
              payload.push({
                device: 9,
                code: 3031,
                delay: 100,
                activate: 1,
                addDepress: "true",
              });
              break;
            case "f":
            case "F":
              payload.push({
                device: 9,
                code: 3032,
                delay: 100,
                activate: 1,
                addDepress: "true",
              });
              break;
            case "g":
            case "G":
              payload.push({
                device: 9,
                code: 3033,
                delay: 100,
                activate: 1,
                addDepress: "true",
              });
              break;
            case "h":
            case "H":
              payload.push({
                device: 9,
                code: 3034,
                delay: 100,
                activate: 1,
                addDepress: "true",
              });
              break;
            case "i":
            case "I":
              payload.push({
                device: 9,
                code: 3035,
                delay: 100,
                activate: 1,
                addDepress: "true",
              });
              break;
            case "j":
            case "J":
              payload.push({
                device: 9,
                code: 3036,
                delay: 100,
                activate: 1,
                addDepress: "true",
              });
              break;
            case "k":
            case "K":
              payload.push({
                device: 9,
                code: 3037,
                delay: 100,
                activate: 1,
                addDepress: "true",
              });
              break;
            case "l":
            case "L":
              payload.push({
                device: 9,
                code: 3038,
                delay: 100,
                activate: 1,
                addDepress: "true",
              });
              break;
            case "m":
            case "M":
              payload.push({
                device: 9,
                code: 3039,
                delay: 100,
                activate: 1,
                addDepress: "true",
              });
              break;
            case "n":
            case "N":
              payload.push({
                device: 9,
                code: 3040,
                delay: 100,
                activate: 1,
                addDepress: "true",
              });
              break;
            case "o":
            case "O":
              payload.push({
                device: 9,
                code: 3041,
                delay: 100,
                activate: 1,
                addDepress: "true",
              });
              break;
            case "p":
            case "P":
              payload.push({
                device: 9,
                code: 3042,
                delay: 100,
                activate: 1,
                addDepress: "true",
              });
              break;
            case "q":
            case "Q":
              payload.push({
                device: 9,
                code: 3043,
                delay: 100,
                activate: 1,
                addDepress: "true",
              });
              break;
            case "r":
            case "R":
              payload.push({
                device: 9,
                code: 3044,
                delay: 100,
                activate: 1,
                addDepress: "true",
              });
              break;
            case "s":
            case "S":
              payload.push({
                device: 9,
                code: 3045,
                delay: 100,
                activate: 1,
                addDepress: "true",
              });
              break;
            case "t":
            case "T":
              payload.push({
                device: 9,
                code: 3046,
                delay: 100,
                activate: 1,
                addDepress: "true",
              });
              break;
            case "u":
            case "U":
              payload.push({
                device: 9,
                code: 3047,
                delay: 100,
                activate: 1,
                addDepress: "true",
              });
              break;
            case "v":
            case "V":
              payload.push({
                device: 9,
                code: 3048,
                delay: 100,
                activate: 1,
                addDepress: "true",
              });
              break;
            case "w":
            case "W":
              payload.push({
                device: 9,
                code: 3049,
                delay: 100,
                activate: 1,
                addDepress: "true",
              });
              break;
            case "x":
            case "X":
              payload.push({
                device: 9,
                code: 3050,
                delay: 100,
                activate: 1,
                addDepress: "true",
              });
              break;
            case "y":
            case "Y":
              payload.push({
                device: 9,
                code: 3051,
                delay: 100,
                activate: 1,
                addDepress: "true",
              });
              break;
            case "z":
            case "Z":
              payload.push({
                device: 9,
                code: 3052,
                delay: 100,
                activate: 1,
                addDepress: "true",
              });
              break;
          }
        }
        //Enter name
        payload.push({
          device: 9,
          code: 3005,
          delay: 100,
          activate: 1,
          addDepress: "true",
        });
      }

      return payload;
    }
    default:
      return [];
  }
}
// debugger;
let arr = [
    ["_", "_", "_"],
    ["_", "_", "_"],
    ["_", "_", "_"]
];
let firstplayer = "x";
let computer = "o";
let board = arr[0].join("   ") +
    "\n" +
    arr[1].join("   ") +
    "\n" +
    arr[2].join("   ") +
    "\n";

let row = +prompt("Ընտրեք, թե ՏՈՂԻ վրա որտեղ գտնվի" + "\n" + board);
let column = +prompt("Ընտրեք, թե ՍՅԱՆ վրա որտեղ գտնվի" + "\n" + board);
let nolrow = [0, 1, 2];
let nolcolumn = [0, 1, 2];



arr[row][column] = firstplayer;
    if (row === 0 && column ===0){
        arr[nolrow[1]][nolcolumn[1]] = computer;
        alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  "));
        let row1 = +prompt("Ընտրեք, թե ՏՈՂԻ վրա որտեղ գտնվի" + "\n" + (arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ")));
        let column1 = +prompt("Ընտրեք, թե ՍՅԱՆ վրա որտեղ գտնվի" + "\n" + (arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ")));
        arr[row1][column1] = firstplayer;
        if (row1 === 0 && column1 ===2){
            arr[nolrow[0]][nolcolumn[1]] = computer;
            alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  "));
            let row10 = +prompt("Ընտրեք, թե ՏՈՂԻ վրա որտեղ գտնվի" + "\n" + (arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ")));
            let column10 = +prompt("Ընտրեք, թե ՍՅԱՆ վրա որտեղ գտնվի" + "\n" + (arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ")));
            arr[row10][column10] = firstplayer;
            if (row10 === 1 && column10 ===0){
                arr[nolrow[2]][nolcolumn[1]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
            }else if (row10 === 1 && column10 ===2){
                arr[nolrow[2]][nolcolumn[1]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
            }else if (row10 === 2 && column10 ===0){
                arr[nolrow[2]][nolcolumn[1]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
            }else if (row10 === 2 && column10 ===1){
                arr[nolrow[2]][nolcolumn[2]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  "));
                let row74 = +prompt("Ընտրեք, թե ՏՈՂԻ վրա որտեղ գտնվի" + "\n" + (arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ")));
                let column74 = +prompt("Ընտրեք, թե ՍՅԱՆ վրա որտեղ գտնվի" + "\n" + (arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ")));
                arr[row74][column74] = firstplayer;
                if (row74 === 1 && column74 ===0){
                    arr[nolrow[1]][nolcolumn[2]] = computer;
                    alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  "));
                }else if (row74 === 1 && column74 ===2){
                    arr[nolrow[1]][nolcolumn[0]] = computer;
                    alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  "));
                }else if (row74 === 2 && column74 ===0){
                    arr[nolrow[1]][nolcolumn[0]] = computer;
                    alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  "));
                }
            }else if (row10 === 2 && column10 ===2){
                arr[nolrow[2]][nolcolumn[1]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
            }
        }else if (row1 === 1 && column1 ===0){
            arr[nolrow[2]][nolcolumn[0]] = computer;
            alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  "));
            let row11 = +prompt("Ընտրեք, թե ՏՈՂԻ վրա որտեղ գտնվի" + "\n" + (arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ")));
            let column11 = +prompt("Ընտրեք, թե ՍՅԱՆ վրա որտեղ գտնվի" + "\n" + (arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ")));
            arr[row11][column11] = firstplayer;
            if (row11 === 0 && column11 ===1){
                arr[nolrow[0]][nolcolumn[2]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
            }else if (row11 === 0 && column11 ===2){
                arr[nolrow[0]][nolcolumn[1]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  "));
                let row75 = +prompt("Ընտրեք, թե ՏՈՂԻ վրա որտեղ գտնվի" + "\n" + (arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ")));
                let column75 = +prompt("Ընտրեք, թե ՍՅԱՆ վրա որտեղ գտնվի" + "\n" + (arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ")));
                arr[row75][column75] = firstplayer;
                if (row75 === 1 && column75 ===2){
                    arr[nolrow[2]][nolcolumn[1]] = computer;
                    alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ")  + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
                }else if (row75 === 2 && column75 ===1){
                    arr[nolrow[1]][nolcolumn[2]] = computer;
                    alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  "));
                }else if (row75 === 2 && column75 ===2){
                    arr[nolrow[2]][nolcolumn[1]] = computer;
                    alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
                }
            }else if (row11 === 1 && column11 ===2){
                arr[nolrow[0]][nolcolumn[2]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
            }else if (row11 === 2 && column11 ===1){
                arr[nolrow[0]][nolcolumn[2]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
            }else if (row11 === 2 && column11 ===2){
                arr[nolrow[0]][nolcolumn[2]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
            }
        }else if (row1 === 0 && column1 ===1){
            arr[nolrow[0]][nolcolumn[2]] = computer;
            alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  "));
            let row12 = +prompt("Ընտրեք, թե ՏՈՂԻ վրա որտեղ գտնվի" + "\n" + (arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ")));
            let column12 = +prompt("Ընտրեք, թե ՍՅԱՆ վրա որտեղ գտնվի" + "\n" + (arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ")));
            arr[row12][column12] = firstplayer;
            if (row12 === 1 && column12 ===0){
                arr[nolrow[2]][nolcolumn[0]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
            }else if (row12 === 1 && column12 ===2){
                arr[nolrow[2]][nolcolumn[0]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
            }else if (row12 === 2 && column12 ===0){
                arr[nolrow[1]][nolcolumn[0]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  "));
                let row76 = +prompt("Ընտրեք, թե ՏՈՂԻ վրա որտեղ գտնվի" + "\n" + (arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ")));
                let column76 = +prompt("Ընտրեք, թե ՍՅԱՆ վրա որտեղ գտնվի" + "\n" + (arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ")));
                arr[row76][column76] = firstplayer;
                if (row76 === 1 && column76 ===2){
                    arr[nolrow[2]][nolcolumn[1]] = computer;
                    alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  "));
                }else if (row76 === 2 && column76 ===1){
                    arr[nolrow[1]][nolcolumn[2]] = computer;
                    alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
                }else if (row76 === 2 && column76 ===2){
                    arr[nolrow[1]][nolcolumn[2]] = computer;
                    alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
                }
            }else if (row12 === 2 && column12 ===1){
                arr[nolrow[2]][nolcolumn[0]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
            }else if (row12 === 2 && column12 ===2){
                arr[nolrow[2]][nolcolumn[0]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
            }
        }else if (row1 === 1 && column1 ===2){
            arr[nolrow[0]][nolcolumn[1]] = computer;
            alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  "));
            let row13 = +prompt("Ընտրեք, թե ՏՈՂԻ վրա որտեղ գտնվի" + "\n" + (arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ")));
            let column13 = +prompt("Ընտրեք, թե ՍՅԱՆ վրա որտեղ գտնվի" + "\n" + (arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ")));
            arr[row13][column13] = firstplayer;
            if (row13 === 0 && column13 ===2){
                arr[nolrow[2]][nolcolumn[1]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
            }else if (row13 === 1 && column13 ===0){
                arr[nolrow[2]][nolcolumn[1]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
            }else if (row13 === 2 && column13 ===0){
                arr[nolrow[2]][nolcolumn[1]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ")+ "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
            }else if (row13 === 2 && column13 ===1){
                arr[nolrow[2]][nolcolumn[0]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  "));
                let row77 = +prompt("Ընտրեք, թե ՏՈՂԻ վրա որտեղ գտնվի" + "\n" + (arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ")));
                let column77 = +prompt("Ընտրեք, թե ՍՅԱՆ վրա որտեղ գտնվի" + "\n" + (arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ")));
                arr[row77][column77] = firstplayer;
                if (row77 === 0 && column77 ===2){
                    arr[nolrow[2]][nolcolumn[2]] = computer;
                    alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  "));
                }else if (row77 === 1 && column77 ===0){
                    arr[nolrow[0]][nolcolumn[2]] = computer;
                    alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
                }else if (row77 === 2 && column77 ===2){
                    arr[nolrow[0]][nolcolumn[2]] = computer;
                    alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
                }
            }else if (row13 === 2 && column13 ===2){
                arr[nolrow[2]][nolcolumn[1]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
            }
        }else if (row1 === 2 && column1 ===0){
            arr[nolrow[1]][nolcolumn[0]] = computer;
            alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  "));
            let row14 = +prompt("Ընտրեք, թե ՏՈՂԻ վրա որտեղ գտնվի" + "\n" + (arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ")));
            let column14 = +prompt("Ընտրեք, թե ՍՅԱՆ վրա որտեղ գտնվի" + "\n" + (arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ")));
            arr[row14][column14] = firstplayer;
            if (row14 === 0 && column14 ===1){
                arr[nolrow[1]][nolcolumn[2]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
            }else if (row14 === 0 && column14 ===2){
                arr[nolrow[1]][nolcolumn[2]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
            }else if (row14 === 1 && column14 ===2){
                arr[nolrow[0]][nolcolumn[1]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  "));
                let row78 = +prompt("Ընտրեք, թե ՏՈՂԻ վրա որտեղ գտնվի" + "\n" + (arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ")));
                let column78 = +prompt("Ընտրեք, թե ՍՅԱՆ վրա որտեղ գտնվի" + "\n" + (arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ")));
                arr[row78][column78] = firstplayer;
                if (row78 === 0 && column78 ===2){
                    arr[nolrow[2]][nolcolumn[1]] = computer;
                    alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
                }else if (row78 === 2 && column78 ===1){
                    arr[nolrow[2]][nolcolumn[2]] = computer;
                    alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  "));
                }else if (row78 === 2 && column78 ===2){
                    arr[nolrow[2]][nolcolumn[1]] = computer;
                    alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
                }
            }else if (row14 === 2 && column14 ===1){
                arr[nolrow[1]][nolcolumn[2]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
            }else if (row14 === 2 && column14 ===2){
                arr[nolrow[1]][nolcolumn[2]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
            }
        }else if (row1 === 2 && column1 ===1){
            arr[nolrow[2]][nolcolumn[0]] = computer;
            alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  "));
            let row15 = +prompt("Ընտրեք, թե ՏՈՂԻ վրա որտեղ գտնվի" + "\n" + (arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ")));
            let column15 = +prompt("Ընտրեք, թե ՍՅԱՆ վրա որտեղ գտնվի" + "\n" + (arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ")));
            arr[row15][column15] = firstplayer;
            if (row15 === 0 && column15 ===1){
                arr[nolrow[0]][nolcolumn[2]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
            }else if (row15 === 0 && column15 ===2){
                arr[nolrow[0]][nolcolumn[1]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  "));
                let row79 = +prompt("Ընտրեք, թե ՏՈՂԻ վրա որտեղ գտնվի" + "\n" + (arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ")));
                let column79 = +prompt("Ընտրեք, թե ՍՅԱՆ վրա որտեղ գտնվի" + "\n" + (arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ")));
                arr[row79][column79] = firstplayer;
                if (row79 === 1 && column79 ===0){
                    arr[nolrow[1]][nolcolumn[2]] = computer;
                    alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  "));
                }else if (row79 === 1 && column79 ===2){
                    arr[nolrow[2]][nolcolumn[2]] = computer;
                    alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  "));
                }else if (row79 === 2 && column79 ===2){
                    arr[nolrow[1]][nolcolumn[2]] = computer;
                    alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  "));
                }
            }else if (row15 === 1 && column15 ===0){
                arr[nolrow[0]][nolcolumn[2]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
            }else if (row15 === 1 && column15 ===1){
                arr[nolrow[0]][nolcolumn[2]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
            }else if (row15 === 2 && column15 ===2){
                arr[nolrow[0]][nolcolumn[2]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
            }
        }else if (row1 === 2 && column1 ===2){
            arr[nolrow[0]][nolcolumn[1]] = computer;
            alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  "));
            let row16 = +prompt("Ընտրեք, թե ՏՈՂԻ վրա որտեղ գտնվի" + "\n" + (arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ")));
            let column16 = +prompt("Ընտրեք, թե ՍՅԱՆ վրա որտեղ գտնվի" + "\n" + (arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ")));
            arr[row16][column16] = firstplayer;
            if (row16 === 0 && column16 ===2){
                arr[nolrow[2]][nolcolumn[1]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
            }else if (row16 === 1 && column16 ===0){
                arr[nolrow[2]][nolcolumn[1]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
            }else if (row16 === 1 && column16 ===2){
                arr[nolrow[2]][nolcolumn[1]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
            }else if (row16 === 2 && column16 ===0){
                arr[nolrow[2]][nolcolumn[1]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
            }else if (row16 === 2 && column16 ===1){
                arr[nolrow[2]][nolcolumn[0]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  "));
                let row80 = +prompt("Ընտրեք, թե ՏՈՂԻ վրա որտեղ գտնվի" + "\n" + (arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ")));
                let column80 = +prompt("Ընտրեք, թե ՍՅԱՆ վրա որտեղ գտնվի" + "\n" + (arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ")));
                arr[row80][column80] = firstplayer;
                if (row80 === 0 && column80 ===2){
                    arr[nolrow[1]][nolcolumn[2]] = computer;
                    alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  "));
                }else if (row80 === 1 && column80 ===0){
                    arr[nolrow[0]][nolcolumn[2]] = computer;
                    alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
                }else if (row80 === 1 && column80 ===2){
                    arr[nolrow[0]][nolcolumn[2]] = computer;
                    alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
                }
            }
        }
    }else if (row === 0 && column ===1){
        arr[nolrow[1]][nolcolumn[1]] = computer;
        alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  "));
        let row2 = +prompt("Ընտրեք, թե ՏՈՂԻ վրա որտեղ գտնվի" + "\n" + (arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ")));
        let column2 = +prompt("Ընտրեք, թե ՍՅԱՆ վրա որտեղ գտնվի" + "\n" + (arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ")));
        arr[row2][column2] = firstplayer;
        if (row2 === 0 && column2 ===0){
            arr[nolrow[0]][nolcolumn[2]] = computer;
            alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  "));
            let row17 = +prompt("Ընտրեք, թե ՏՈՂԻ վրա որտեղ գտնվի" + "\n" + (arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ")));
            let column17 = +prompt("Ընտրեք, թե ՍՅԱՆ վրա որտեղ գտնվի" + "\n" + (arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ")));
            arr[row17][column17] = firstplayer;
            if (row17 === 1 && column17 ===0){
                arr[nolrow[2]][nolcolumn[0]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
            }else if (row17 === 1 && column17 ===2){
                arr[nolrow[2]][nolcolumn[0]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
            }else if (row17 === 2 && column17 ===0){
                arr[nolrow[1]][nolcolumn[0]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  "));
                let row81 = +prompt("Ընտրեք, թե ՏՈՂԻ վրա որտեղ գտնվի" + "\n" + (arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ")));
                let column81 = +prompt("Ընտրեք, թե ՍՅԱՆ վրա որտեղ գտնվի" + "\n" + (arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ")));
                arr[row81][column81] = firstplayer;
                if (row81 === 1 && column81 ===2){
                    arr[nolrow[2]][nolcolumn[2]] = computer;
                    alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  "));
                }else if (row81 === 2 && column81 ===1){
                    arr[nolrow[1]][nolcolumn[2]] = computer;
                    alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
                }else if (row81 === 2 && column81 ===2){
                    arr[nolrow[1]][nolcolumn[2]] = computer;
                    alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
                }
            }else if (row17 === 2 && column17 ===1){
                arr[nolrow[2]][nolcolumn[0]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
            }else if (row17 === 2 && column17 ===2){
                arr[nolrow[2]][nolcolumn[0]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
            }
        }else if (row2 === 0 && column2 ===2){
            arr[nolrow[0]][nolcolumn[0]] = computer;
            alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  "));
            let row18 = +prompt("Ընտրեք, թե ՏՈՂԻ վրա որտեղ գտնվի" + "\n" + (arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ")));
            let column18 = +prompt("Ընտրեք, թե ՍՅԱՆ վրա որտեղ գտնվի" + "\n" + (arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ")));
            arr[row18][column18] = firstplayer;
            if (row18 === 1 && column18 ===0){
                arr[nolrow[2]][nolcolumn[2]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
            }else if (row18 === 1 && column18 ===2){
                arr[nolrow[2]][nolcolumn[2]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
            }else if (row18 === 2 && column18 ===0){
                arr[nolrow[2]][nolcolumn[2]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
            }else if (row18 === 2 && column18 ===1){
                arr[nolrow[2]][nolcolumn[2]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
            }else if (row18 === 2 && column18 ===2){
                arr[nolrow[1]][nolcolumn[2]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  "));
                let row81 = +prompt("Ընտրեք, թե ՏՈՂԻ վրա որտեղ գտնվի" + "\n" + (arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ")));
                let column81 = +prompt("Ընտրեք, թե ՍՅԱՆ վրա որտեղ գտնվի" + "\n" + (arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ")));
                arr[row81][column81] = firstplayer;
                if (row81 === 1 && column81 ===0){
                    arr[nolrow[2]][nolcolumn[0]] = computer;
                    alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  "));
                }else if (row81 === 2 && column81 ===0){
                    arr[nolrow[1]][nolcolumn[0]] = computer;
                    alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
                }else if (row81 === 2 && column81 ===1){
                    arr[nolrow[1]][nolcolumn[0]] = computer;
                    alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
                }
            }
        }else if (row2 === 1 && column2 ===0){
            arr[nolrow[0]][nolcolumn[0]] = computer;
            alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  "));
            let row19 = +prompt("Ընտրեք, թե ՏՈՂԻ վրա որտեղ գտնվի" + "\n" + (arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ")));
            let column19 = +prompt("Ընտրեք, թե ՍՅԱՆ վրա որտեղ գտնվի" + "\n" + (arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ")));
            arr[row19][column19] = firstplayer;
            if (row19 === 0 && column19 ===2){
                arr[nolrow[2]][nolcolumn[2]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
            }else if (row19 === 1 && column19 ===2){
                arr[nolrow[2]][nolcolumn[2]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
            }else if (row19 === 2 && column19 ===0){
                arr[nolrow[2]][nolcolumn[2]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
            }else if (row19 === 2 && column19 ===1){
                arr[nolrow[2]][nolcolumn[2]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
            }else if (row19 === 2 && column19 ===2){
                arr[nolrow[0]][nolcolumn[2]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  "));
                let row82 = +prompt("Ընտրեք, թե ՏՈՂԻ վրա որտեղ գտնվի" + "\n" + (arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ")));
                let column82 = +prompt("Ընտրեք, թե ՍՅԱՆ վրա որտեղ գտնվի" + "\n" + (arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ")));
                arr[row82][column82] = firstplayer;
                if (row82 === 1 && column82 ===2){
                    arr[nolrow[2]][nolcolumn[0]] = computer;
                    alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
                }else if (row82 === 2 && column82 ===0){
                    arr[nolrow[1]][nolcolumn[2]] = computer;
                    alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  "));
                }else if (row82 === 2 && column82 ===0){
                    arr[nolrow[1]][nolcolumn[0]] = computer;
                    alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
                }
            }
        }else if (row2 === 1 && column2 ===2){
            arr[nolrow[0]][nolcolumn[2]] = computer;
            alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  "));
            let row20 = +prompt("Ընտրեք, թե ՏՈՂԻ վրա որտեղ գտնվի" + "\n" + (arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ")));
            let column20 = +prompt("Ընտրեք, թե ՍՅԱՆ վրա որտեղ գտնվի" + "\n" + (arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ")));
            arr[row20][column20] = firstplayer;
            if (row20 === 0 && column20 ===0){
                arr[nolrow[2]][nolcolumn[0]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
            }else if (row20 === 1 && column20 ===0){
                arr[nolrow[2]][nolcolumn[0]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
            }else if (row20 === 2 && column20 ===0){
                arr[nolrow[0]][nolcolumn[0]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  "));
                let row83 = +prompt("Ընտրեք, թե ՏՈՂԻ վրա որտեղ գտնվի" + "\n" + (arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ")));
                let column83 = +prompt("Ընտրեք, թե ՍՅԱՆ վրա որտեղ գտնվի" + "\n" + (arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ")));
                arr[row83][column83] = firstplayer;
                if (row83 === 1 && column83 ===0){
                    arr[nolrow[2]][nolcolumn[2]] = computer;
                    alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
                }else if (row83 === 2 && column83 ===2){
                    arr[nolrow[1]][nolcolumn[0]] = computer;
                    alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  "));
                }else if (row83 === 2 && column83 ===1){
                    arr[nolrow[2]][nolcolumn[2]] = computer;
                    alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
                }
            }else if (row20 === 2 && column20 ===1){
                arr[nolrow[2]][nolcolumn[0]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
            }else if (row20 === 2 && column20 ===2){
                arr[nolrow[2]][nolcolumn[0]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
            }
        }else if (row2 === 2 && column2 ===0){
            arr[nolrow[0]][nolcolumn[0]] = computer;
            alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  "));
            let row21 = +prompt("Ընտրեք, թե ՏՈՂԻ վրա որտեղ գտնվի" + "\n" + (arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ")));
            let column21 = +prompt("Ընտրեք, թե ՍՅԱՆ վրա որտեղ գտնվի" + "\n" + (arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ")));
            arr[row21][column21] = firstplayer;
            if (row21 === 0 && column21 ===2){
                arr[nolrow[2]][nolcolumn[2]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
            }else if (row21 === 1 && column21 ===0){
                arr[nolrow[2]][nolcolumn[2]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
            }else if (row21 === 1 && column21 ===2){
                arr[nolrow[2]][nolcolumn[2]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
            }else if (row21 === 2 && column21 ===1){
                arr[nolrow[2]][nolcolumn[2]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
            }else if (row21 === 2 && column21 ===2){
                arr[nolrow[2]][nolcolumn[1]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  "));
                let row84 = +prompt("Ընտրեք, թե ՏՈՂԻ վրա որտեղ գտնվի" + "\n" + (arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ")));
                let column84 = +prompt("Ընտրեք, թե ՍՅԱՆ վրա որտեղ գտնվի" + "\n" + (arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ")));
                arr[row84][column84] = firstplayer;
                if (row84 === 0 && column84 ===2){
                    arr[nolrow[1]][nolcolumn[2]] = computer;
                    alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  "));
                }else if (row84 === 1 && column84 ===0){
                    arr[nolrow[1]][nolcolumn[2]] = computer;
                    alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  "));
                }else if (row84 === 1 && column84 ===2){
                    arr[nolrow[0]][nolcolumn[2]] = computer;
                    alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  "));
                }
            }
        }else if (row2 === 2 && column2 ===1){
            arr[nolrow[2]][nolcolumn[0]] = computer;
            alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  "));
            let row22 = +prompt("Ընտրեք, թե ՏՈՂԻ վրա որտեղ գտնվի" + "\n" + (arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ")));
            let column22 = +prompt("Ընտրեք, թե ՍՅԱՆ վրա որտեղ գտնվի" + "\n" + (arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ")));
            arr[row22][column22] = firstplayer;
            if (row22 === 0 && column22 ===0){
                arr[nolrow[0]][nolcolumn[2]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
            }else if (row22 === 0 && column22 ===2){
                arr[nolrow[0]][nolcolumn[0]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  "));
                let row85 = +prompt("Ընտրեք, թե ՏՈՂԻ վրա որտեղ գտնվի" + "\n" + (arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ")));
                let column85 = +prompt("Ընտրեք, թե ՍՅԱՆ վրա որտեղ գտնվի" + "\n" + (arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ")));
                arr[row85][column85] = firstplayer;
                if (row85 === 1 && column85 ===0){
                    arr[nolrow[1]][nolcolumn[2]] = computer;
                    alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  "));
                }else if (row85 === 1 && column85 ===2){
                    arr[nolrow[1]][nolcolumn[0]] = computer;
                    alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ")+ "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
                }else if (row85 === 2 && column85 ===2){
                    arr[nolrow[0]][nolcolumn[2]] = computer;
                    alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ")+ "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
                }
            }else if (row22 === 1 && column22 ===0){
                arr[nolrow[0]][nolcolumn[2]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
            }else if (row22 === 1 && column22 ===2){
                arr[nolrow[0]][nolcolumn[2]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
            }else if (row22 === 2 && column22 ===2){
                arr[nolrow[0]][nolcolumn[2]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
            }
        }else if (row2 === 2 && column2 ===2){
            arr[nolrow[0]][nolcolumn[2]] = computer;
            alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  "));
            let row23 = +prompt("Ընտրեք, թե ՏՈՂԻ վրա որտեղ գտնվի" + "\n" + (arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ")));
            let column23 = +prompt("Ընտրեք, թե ՍՅԱՆ վրա որտեղ գտնվի" + "\n" + (arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ")));
            arr[row23][column23] = firstplayer;
            if (row23 === 0 && column23 ===0){
                arr[nolrow[2]][nolcolumn[0]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
            }else if (row23 === 1 && column23 ===0){
                arr[nolrow[2]][nolcolumn[0]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
            }else if (row23 === 1 && column23 ===2){
                arr[nolrow[2]][nolcolumn[0]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
            }else if (row23 === 2 && column23 ===0){
                arr[nolrow[2]][nolcolumn[1]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  "));
                let row86 = +prompt("Ընտրեք, թե ՏՈՂԻ վրա որտեղ գտնվի" + "\n" + (arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ")));
                let column86 = +prompt("Ընտրեք, թե ՍՅԱՆ վրա որտեղ գտնվի" + "\n" + (arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ")));
                arr[row86][column86] = firstplayer;
                if (row86 === 0 && column86 ===0){
                    arr[nolrow[1]][nolcolumn[0]] = computer;
                    alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  "));
                }else if (row86 === 1 && column86 ===0){
                    arr[nolrow[0]][nolcolumn[0]] = computer;
                    alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  "));
                }else if (row86 === 1 && column86 ===2){
                    arr[nolrow[0]][nolcolumn[0]] = computer;
                    alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  "));
                }
            }else if (row23 === 2 && column23 ===1){
                arr[nolrow[2]][nolcolumn[0]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
            }
        }
    }else if (row === 0 && column ===2){
        arr[nolrow[1]][nolcolumn[1]] = computer;
        alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  "));
        let row3 = +prompt("Ընտրեք, թե ՏՈՂԻ վրա որտեղ գտնվի" + "\n" + (arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ")));
        let column3 = +prompt("Ընտրեք, թե ՍՅԱՆ վրա որտեղ գտնվի" + "\n" + (arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ")));
        arr[row3][column3] = firstplayer;
        if (row3 === 0 && column3 ===0){
            arr[nolrow[0]][nolcolumn[1]] = computer;
            alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  "));
            let row24 = +prompt("Ընտրեք, թե ՏՈՂԻ վրա որտեղ գտնվի" + "\n" + (arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ")));
            let column24 = +prompt("Ընտրեք, թե ՍՅԱՆ վրա որտեղ գտնվի" + "\n" + (arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ")));
            arr[row24][column24] = firstplayer;
            if (row24 === 1 && column24 ===0){
                arr[nolrow[2]][nolcolumn[1]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
            }else if (row24 === 1 && column24 ===2){
                arr[nolrow[2]][nolcolumn[1]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
            }else if (row24 === 2 && column24 ===2){
                arr[nolrow[2]][nolcolumn[1]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
            }else if (row24 === 2 && column24 ===1){
                arr[nolrow[1]][nolcolumn[0]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  "));
                let row87 = +prompt("Ընտրեք, թե ՏՈՂԻ վրա որտեղ գտնվի" + "\n" + (arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ")));
                let column87 = +prompt("Ընտրեք, թե ՍՅԱՆ վրա որտեղ գտնվի" + "\n" + (arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ")));
                arr[row87][column87] = firstplayer;
                if (row87 === 1 && column87 ===2){
                    arr[nolrow[2]][nolcolumn[0]] = computer;
                    alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  "));
                }else if (row87 === 2 && column87 ===0){
                    arr[nolrow[1]][nolcolumn[2]] = computer;
                    alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ")+ "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
                }else if (row87 === 2 && column87 ===2){
                    arr[nolrow[1]][nolcolumn[2]] = computer;
                    alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ")+ "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
                }
            }else if (row24 === 2 && column24 ===2){
                arr[nolrow[2]][nolcolumn[1]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
            }
        }else if (row3 === 0 && column3 ===1){
            arr[nolrow[0]][nolcolumn[0]] = computer;
            alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  "));
            let row25 = +prompt("Ընտրեք, թե ՏՈՂԻ վրա որտեղ գտնվի" + "\n" + (arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ")));
            let column25 = +prompt("Ընտրեք, թե ՍՅԱՆ վրա որտեղ գտնվի" + "\n" + (arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ")));
            arr[row25][column25] = firstplayer;
            if (row25 === 1 && column25 ===0){
                arr[nolrow[2]][nolcolumn[2]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
            }else if (row25 === 1 && column25 ===2){
                arr[nolrow[2]][nolcolumn[2]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
            }else if (row25 === 2 && column25 ===0){
                arr[nolrow[2]][nolcolumn[2]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
            }else if (row25 === 2 && column25 ===1){
                arr[nolrow[2]][nolcolumn[2]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
            }else if (row25 === 2 && column25 ===2){
                arr[nolrow[1]][nolcolumn[2]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  "));
                let row88 = +prompt("Ընտրեք, թե ՏՈՂԻ վրա որտեղ գտնվի" + "\n" + (arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ")));
                let column88 = +prompt("Ընտրեք, թե ՍՅԱՆ վրա որտեղ գտնվի" + "\n" + (arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ")));
                arr[row88][column88] = firstplayer;
                if (row88 === 1 && column88 ===0){
                    arr[nolrow[2]][nolcolumn[0]] = computer;
                    alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  "));
                }else if (row88 === 2 && column88 ===0){
                    arr[nolrow[1]][nolcolumn[0]] = computer;
                    alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ")+ "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
                }else if (row88 === 2 && column88 ===1){
                    arr[nolrow[1]][nolcolumn[0]] = computer;
                    alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ")+ "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
                }
            }
        }else if (row3 === 1 && column3 ===0){
            arr[nolrow[0]][nolcolumn[0]] = computer;
            alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  "));
            let row26 = +prompt("Ընտրեք, թե ՏՈՂԻ վրա որտեղ գտնվի" + "\n" + (arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ")));
            let column26 = +prompt("Ընտրեք, թե ՍՅԱՆ վրա որտեղ գտնվի" + "\n" + (arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ")));
            arr[row26][column26] = firstplayer;
            if (row26 === 0 && column26 ===1){
                arr[nolrow[2]][nolcolumn[2]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
            }else if (row26 === 1 && column26 ===2){
                arr[nolrow[2]][nolcolumn[2]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
            }else if (row26 === 2 && column26 ===0){
                arr[nolrow[2]][nolcolumn[2]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
            }else if (row26 === 2 && column26 ===1){
                arr[nolrow[2]][nolcolumn[2]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
            }else if (row26 === 2 && column26 ===2){
                arr[nolrow[1]][nolcolumn[2]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  "));
                let row89 = +prompt("Ընտրեք, թե ՏՈՂԻ վրա որտեղ գտնվի" + "\n" + (arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ")));
                let column89 = +prompt("Ընտրեք, թե ՍՅԱՆ վրա որտեղ գտնվի" + "\n" + (arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ")));
                arr[row89][column89] = firstplayer;
                if (row89 === 0 && column89 ===1){
                    arr[nolrow[2]][nolcolumn[1]] = computer;
                    alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  "));
                }else if (row89 === 2 && column89 ===0){
                    arr[nolrow[2]][nolcolumn[1]] = computer;
                    alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ")+ "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
                }else if (row89 === 2 && column89 ===1){
                    arr[nolrow[2]][nolcolumn[0]] = computer;
                    alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ")+ "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
                }
            }
        }else if (row3 === 1 && column3 ===2){
            arr[nolrow[2]][nolcolumn[2]] = computer;
            alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  "));
            let row27 = +prompt("Ընտրեք, թե ՏՈՂԻ վրա որտեղ գտնվի" + "\n" + (arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ")));
            let column27 = +prompt("Ընտրեք, թե ՍՅԱՆ վրա որտեղ գտնվի" + "\n" + (arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ")));
            arr[row27][column27] = firstplayer;
            if (row27 === 0 && column27 ===0){
                arr[nolrow[0]][nolcolumn[1]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  "));
                let row90 = +prompt("Ընտրեք, թե ՏՈՂԻ վրա որտեղ գտնվի" + "\n" + (arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ")));
                let column90 = +prompt("Ընտրեք, թե ՍՅԱՆ վրա որտեղ գտնվի" + "\n" + (arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ")));
                arr[row90][column90] = firstplayer;
                if (row90 === 1 && column90 ===0){
                    arr[nolrow[2]][nolcolumn[1]] = computer;
                    alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ")+ "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
                }else if (row90 === 2 && column90 ===0){
                    arr[nolrow[2]][nolcolumn[1]] = computer;
                    alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ")+ "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
                }else if (row90 === 2 && column90 ===1){
                    arr[nolrow[2]][nolcolumn[0]] = computer;
                    alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  "));
                }
            }else if (row27 === 0 && column27 ===1){
                arr[nolrow[0]][nolcolumn[0]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
            }else if (row27 === 1 && column27 ===0){
                arr[nolrow[0]][nolcolumn[0]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
            }else if (row27 === 2 && column27 ===0){
                arr[nolrow[0]][nolcolumn[0]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
            }else if (row27 === 2 && column27 ===1){
                arr[nolrow[0]][nolcolumn[0]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
            }
        }else if (row3 === 2 && column3 ===0){
            arr[nolrow[1]][nolcolumn[0]] = computer;
            alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  "));
            let row28 = +prompt("Ընտրեք, թե ՏՈՂԻ վրա որտեղ գտնվի" + "\n" + (arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ")));
            let column28 = +prompt("Ընտրեք, թե ՍՅԱՆ վրա որտեղ գտնվի" + "\n" + (arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ")));
            arr[row28][column28] = firstplayer;
            if (row28 === 0 && column28 ===0){
                arr[nolrow[1]][nolcolumn[2]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ")+ "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
            }else if (row28 === 0 && column28 ===1){
                arr[nolrow[1]][nolcolumn[2]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
            }else if (row28 === 1 && column28 ===2){
                arr[nolrow[2]][nolcolumn[2]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  "));
                let row91 = +prompt("Ընտրեք, թե ՏՈՂԻ վրա որտեղ գտնվի" + "\n" + (arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ")));
                let column91 = +prompt("Ընտրեք, թե ՍՅԱՆ վրա որտեղ գտնվի" + "\n" + (arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ")));
                arr[row91][column91] = firstplayer;
                if (row91 === 0 && column91 ===0){
                    arr[nolrow[0]][nolcolumn[1]] = computer;
                    alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  "));
                }else if (row91 === 0 && column91 ===1){
                    arr[nolrow[0]][nolcolumn[0]] = computer;
                    alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ")+ "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
                }else if (row91 === 2 && column91 ===1){
                    arr[nolrow[0]][nolcolumn[0]] = computer;
                    alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ")+ "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
                }
            }else if (row28 === 2 && column28 ===1){
                arr[nolrow[1]][nolcolumn[2]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
            }else if (row28 === 2 && column28 ===2){
                arr[nolrow[1]][nolcolumn[2]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
            }
        }else if (row3 === 2 && column3 ===1){
            arr[nolrow[2]][nolcolumn[2]] = computer;
            alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  "));
            let row29 = +prompt("Ընտրեք, թե ՏՈՂԻ վրա որտեղ գտնվի" + "\n" + (arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ")));
            let column29 = +prompt("Ընտրեք, թե ՍՅԱՆ վրա որտեղ գտնվի" + "\n" + (arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ")));
            arr[row29][column29] = firstplayer;
            if (row29 === 0 && column29 ===0){
                arr[nolrow[0]][nolcolumn[1]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  "));
                let row92 = +prompt("Ընտրեք, թե ՏՈՂԻ վրա որտեղ գտնվի" + "\n" + (arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ")));
                let column92 = +prompt("Ընտրեք, թե ՍՅԱՆ վրա որտեղ գտնվի" + "\n" + (arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ")));
                arr[row92][column92] = firstplayer;
                if (row92 === 1 && column92 ===0){
                    arr[nolrow[2]][nolcolumn[0]] = computer;
                    alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  "));
                }else if (row92 === 1 && column92 ===2){
                    arr[nolrow[1]][nolcolumn[0]] = computer;
                    alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  "));
                }else if (row92 === 2 && column92 ===0){
                    arr[nolrow[1]][nolcolumn[0]] = computer;
                    alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  "));
                }
            }else if (row29 === 0 && column29 ===1){
                arr[nolrow[0]][nolcolumn[0]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
            }else if (row29 === 1 && column29 ===0){
                arr[nolrow[0]][nolcolumn[0]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
            }else if (row29 === 1 && column29 ===3){
                arr[nolrow[0]][nolcolumn[0]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
            }else if (row29 === 2 && column29 ===0){
                arr[nolrow[0]][nolcolumn[0]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
            }
        }else if (row3 === 2 && column3 ===2){
            arr[nolrow[1]][nolcolumn[2]] = computer;
            alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  "));
            let row30 = +prompt("Ընտրեք, թե ՏՈՂԻ վրա որտեղ գտնվի" + "\n" + (arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ")));
            let column30 = +prompt("Ընտրեք, թե ՍՅԱՆ վրա որտեղ գտնվի" + "\n" + (arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ")));
            arr[row30][column30] = firstplayer;
            if (row30 === 0 && column30 ===0){
                arr[nolrow[1]][nolcolumn[0]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
            }else if (row30 === 0 && column30 ===1){
                arr[nolrow[1]][nolcolumn[0]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
            }else if (row30 === 1 && column30 ===0){
                arr[nolrow[0]][nolcolumn[1]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  "));
                let row93 = +prompt("Ընտրեք, թե ՏՈՂԻ վրա որտեղ գտնվի" + "\n" + (arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ")));
                let column93 = +prompt("Ընտրեք, թե ՍՅԱՆ վրա որտեղ գտնվի" + "\n" + (arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ")));
                arr[row93][column93] = firstplayer;
                if (row93 === 0 && column93 ===0){
                    arr[nolrow[2]][nolcolumn[1]] = computer;
                    alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ")+ "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
                }else if (row93 === 2 && column93 ===0){
                    arr[nolrow[2]][nolcolumn[1]] = computer;
                    alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ")+ "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
                }else if (row93 === 2 && column93 ===1){
                    arr[nolrow[2]][nolcolumn[0]] = computer;
                    alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  "));
                }
            }else if (row30 === 2 && column30 ===0){
                arr[nolrow[1]][nolcolumn[0]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
            }else if (row30 === 2 && column30 ===1){
                arr[nolrow[1]][nolcolumn[0]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
            }
        }
    }else if (row === 1 && column ===0){
        arr[nolrow[1]][nolcolumn[1]] = computer;
        alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  "));
        let row4 = +prompt("Ընտրեք, թե ՏՈՂԻ վրա որտեղ գտնվի" + "\n" + (arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ")));
        let column4 = +prompt("Ընտրեք, թե ՍՅԱՆ վրա որտեղ գտնվի" + "\n" + (arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ")));
        arr[row4][column4] = firstplayer;
        if (row4 === 0 && column4 ===0){
            arr[nolrow[2]][nolcolumn[0]] = computer;
            alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  "));
            let row31 = +prompt("Ընտրեք, թե ՏՈՂԻ վրա որտեղ գտնվի" + "\n" + (arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ")));
            let column31 = +prompt("Ընտրեք, թե ՍՅԱՆ վրա որտեղ գտնվի" + "\n" + (arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ")));
            arr[row31][column31] = firstplayer;
            if (row31 === 0 && column31 ===1){
                arr[nolrow[0]][nolcolumn[2]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
            }else if (row31 === 0 && column31 ===2){
                arr[nolrow[0]][nolcolumn[1]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  "));
                let row94 = +prompt("Ընտրեք, թե ՏՈՂԻ վրա որտեղ գտնվի" + "\n" + (arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ")));
                let column94 = +prompt("Ընտրեք, թե ՍՅԱՆ վրա որտեղ գտնվի" + "\n" + (arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ")));
                arr[row94][column94] = firstplayer;
                if (row94 === 1 && column94 ===2){
                    arr[nolrow[2]][nolcolumn[1]] = computer;
                    alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ")+ "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
                }else if (row94 === 2 && column94 ===1){
                    arr[nolrow[2]][nolcolumn[2]] = computer;
                    alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  "));
                }else if (row94 === 2 && column94 ===2){
                    arr[nolrow[2]][nolcolumn[1]] = computer;
                    alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ")+ "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
                }  // ստեղեմ հասելլ*******************************************************************************
            }else if (row31 === 1 && column31 ===2){
                arr[nolrow[0]][nolcolumn[2]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
            }else if (row31 === 2 && column31 ===1){
                arr[nolrow[0]][nolcolumn[2]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
            }else if (row31 === 2 && column31 ===2){
                arr[nolrow[0]][nolcolumn[2]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
            }
        }else if (row4 === 0 && column4 ===1){
            arr[nolrow[0]][nolcolumn[0]] = computer;
            alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  "));
            let row32 = +prompt("Ընտրեք, թե ՏՈՂԻ վրա որտեղ գտնվի" + "\n" + (arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ")));
            let column32 = +prompt("Ընտրեք, թե ՍՅԱՆ վրա որտեղ գտնվի" + "\n" + (arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ")));
            arr[row32][column32] = firstplayer;
            if (row32 === 0 && column32 ===2){
                arr[nolrow[2]][nolcolumn[2]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
            }else if (row32 === 1 && column32 ===2){
                arr[nolrow[2]][nolcolumn[2]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
            }else if (row32 === 2 && column32 ===0){
                arr[nolrow[2]][nolcolumn[2]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
            }else if (row32 === 2 && column32 ===1){
                arr[nolrow[2]][nolcolumn[2]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
            }else if (row32 === 2 && column32 ===2){
                arr[nolrow[0]][nolcolumn[2]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  "));
            }
        }else if (row4 === 0 && column4 ===2){
            arr[nolrow[0]][nolcolumn[0]] = computer;
            alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  "));
            let row33 = +prompt("Ընտրեք, թե ՏՈՂԻ վրա որտեղ գտնվի" + "\n" + (arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ")));
            let column33 = +prompt("Ընտրեք, թե ՍՅԱՆ վրա որտեղ գտնվի" + "\n" + (arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ")));
            arr[row33][column33] = firstplayer;
            if (row33 === 0 && column33 ===1){
                arr[nolrow[2]][nolcolumn[2]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
            }else if (row33 === 1 && column33 ===2){
                arr[nolrow[2]][nolcolumn[2]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
            }else if (row33 === 2 && column33 ===0){
                arr[nolrow[2]][nolcolumn[2]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
            }else if (row33 === 2 && column33 ===1){
                arr[nolrow[2]][nolcolumn[2]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
            }else if (row33 === 2 && column33 ===2){
                arr[nolrow[1]][nolcolumn[2]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  "));
            }
        }else if (row4 === 1 && column4 ===2){
            arr[nolrow[0]][nolcolumn[0]] = computer;
            alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  "));
            let row34 = +prompt("Ընտրեք, թե ՏՈՂԻ վրա որտեղ գտնվի" + "\n" + (arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ")));
            let column34 = +prompt("Ընտրեք, թե ՍՅԱՆ վրա որտեղ գտնվի" + "\n" + (arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ")));
            arr[row34][column34] = firstplayer;
            if (row34 === 0 && column34 ===1){
                arr[nolrow[2]][nolcolumn[2]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
            }else if (row34 === 0 && column34 ===2){
                arr[nolrow[2]][nolcolumn[2]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
            }else if (row34 === 2 && column34 ===0){
                arr[nolrow[2]][nolcolumn[2]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
            }else if (row34 === 2 && column34 ===1){
                arr[nolrow[2]][nolcolumn[2]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
            }else if (row34 === 2 && column34 ===2){
                arr[nolrow[0]][nolcolumn[2]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  "));
            }
        }else if (row4 === 2 && column4 ===0){
            arr[nolrow[0]][nolcolumn[0]] = computer;
            alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  "));
            let row35 = +prompt("Ընտրեք, թե ՏՈՂԻ վրա որտեղ գտնվի" + "\n" + (arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ")));
            let column35 = +prompt("Ընտրեք, թե ՍՅԱՆ վրա որտեղ գտնվի" + "\n" + (arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ")));
            arr[row35][column35] = firstplayer;
            if (row35 === 0 && column35 ===1){
                arr[nolrow[2]][nolcolumn[2]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
            }else if (row35 === 0 && column35 ===2){
                arr[nolrow[2]][nolcolumn[2]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
            }else if (row35 === 1 && column35 ===2){
                arr[nolrow[2]][nolcolumn[2]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
            }else if (row35 === 2 && column35 ===1){
                arr[nolrow[2]][nolcolumn[2]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
            }else if (row35 === 2 && column35 ===2){
                arr[nolrow[2]][nolcolumn[1]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  "));
            }
        }else if (row4 === 2 && column4 ===1){
            arr[nolrow[2]][nolcolumn[0]] = computer;
            alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  "));
            let row36 = +prompt("Ընտրեք, թե ՏՈՂԻ վրա որտեղ գտնվի" + "\n" + (arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ")));
            let column36 = +prompt("Ընտրեք, թե ՍՅԱՆ վրա որտեղ գտնվի" + "\n" + (arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ")));
            arr[row36][column36] = firstplayer;
            if (row36 === 0 && column36 ===0){
                arr[nolrow[0]][nolcolumn[2]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
            }else if (row36 === 0 && column36 ===1){
                arr[nolrow[0]][nolcolumn[2]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
            }else if (row36 === 0 && column36 ===2){
                arr[nolrow[0]][nolcolumn[0]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  "));
            }else if (row36 === 1 && column36 ===2){
                arr[nolrow[0]][nolcolumn[2]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
            }else if (row36 === 2 && column36 ===2){
                arr[nolrow[0]][nolcolumn[2]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
            }
        }else if (row4 === 2 && column4 ===2){
            arr[nolrow[2]][nolcolumn[0]] = computer;
            alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  "));
            let row37 = +prompt("Ընտրեք, թե ՏՈՂԻ վրա որտեղ գտնվի" + "\n" + (arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ")));
            let column37 = +prompt("Ընտրեք, թե ՍՅԱՆ վրա որտեղ գտնվի" + "\n" + (arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ")));
            arr[row37][column37] = firstplayer;
            if (row37 === 0 && column37 ===0){
                arr[nolrow[0]][nolcolumn[2]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
            }else if (row37 === 0 && column37 ===1){
                arr[nolrow[0]][nolcolumn[2]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
            }else if (row37 === 0 && column37 ===2){
                arr[nolrow[1]][nolcolumn[2]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  "));
            }else if (row37 === 1 && column37 ===2){
                arr[nolrow[0]][nolcolumn[2]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
            }else if (row37 === 2 && column37 ===1){
                arr[nolrow[0]][nolcolumn[2]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
            }
        }
    }else if (row === 1 && column ===1){
        arr[nolrow[0]][nolcolumn[0]] = computer;
        alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  "));
        let row5 = +prompt("Ընտրեք, թե ՏՈՂԻ վրա որտեղ գտնվի" + "\n" + (arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ")));
        let column5 = +prompt("Ընտրեք, թե ՍՅԱՆ վրա որտեղ գտնվի" + "\n" + (arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ")));
        arr[row5][column5] = firstplayer;
        if (row5 === 0 && column5 ===1){
            arr[nolrow[2]][nolcolumn[1]] = computer;
            alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  "));
            let row38 = +prompt("Ընտրեք, թե ՏՈՂԻ վրա որտեղ գտնվի" + "\n" + (arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ")));
            let column38 = +prompt("Ընտրեք, թե ՍՅԱՆ վրա որտեղ գտնվի" + "\n" + (arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ")));
            arr[row38][column38] = firstplayer;
            if (row38 === 0 && column38 ===2){
                arr[nolrow[2]][nolcolumn[0]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  "));
            }else if (row38 === 1 && column38 ===0){
                arr[nolrow[1]][nolcolumn[2]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  "));
            }else if (row38 === 1 && column38 ===2){
                arr[nolrow[1]][nolcolumn[0]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  "));
            }else if (row38 === 2 && column38 ===0){
                arr[nolrow[0]][nolcolumn[2]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  "));
            }else if (row38 === 2 && column38 ===2){
                arr[nolrow[0]][nolcolumn[2]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  "));
            }
        }else if (row5 === 0 && column5 ===2){
            arr[nolrow[2]][nolcolumn[0]] = computer;
            alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  "));
            let row39 = +prompt("Ընտրեք, թե ՏՈՂԻ վրա որտեղ գտնվի" + "\n" + (arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ")));
            let column39 = +prompt("Ընտրեք, թե ՍՅԱՆ վրա որտեղ գտնվի" + "\n" + (arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ")));
            arr[row39][column39] = firstplayer;
            if (row39 === 0 && column39 ===1){
                arr[nolrow[1]][nolcolumn[2]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ")  + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
            }else if (row39 === 1 && column39 ===0){
                arr[nolrow[1]][nolcolumn[2]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  "));
            }else if (row39 === 1 && column39 ===2){
                arr[nolrow[1]][nolcolumn[0]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ")  + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
            }else if (row39 === 2 && column39 ===1){
                arr[nolrow[1]][nolcolumn[0]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ")  + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
            }else if (row39 === 2 && column39 ===2){
                arr[nolrow[1]][nolcolumn[2]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ")  + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
            }
        }else if (row5 === 1 && column5 ===0){
            arr[nolrow[1]][nolcolumn[2]] = computer;
            alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  "));
            let row40 = +prompt("Ընտրեք, թե ՏՈՂԻ վրա որտեղ գտնվի" + "\n" + (arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ")));
            let column40 = +prompt("Ընտրեք, թե ՍՅԱՆ վրա որտեղ գտնվի" + "\n" + (arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ")));
            arr[row40][column40] = firstplayer;
            if (row40 === 0 && column40 ===1){
                arr[nolrow[2]][nolcolumn[1]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  "));
            }else if (row40 === 0 && column40 ===2){
                arr[nolrow[2]][nolcolumn[0]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  "));
            }else if (row40 === 2 && column40 ===0){
                arr[nolrow[0]][nolcolumn[2]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  "));
            }else if (row40 === 2 && column40 ===1){
                arr[nolrow[0]][nolcolumn[1]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  "));
            }else if (row40 === 2 && column40 ===2){
                arr[nolrow[0]][nolcolumn[2]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  "));
            }
        }else if (row5 === 1 && column5 ===2){
            arr[nolrow[1]][nolcolumn[0]] = computer;
            alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  "));
            let row41 = +prompt("Ընտրեք, թե ՏՈՂԻ վրա որտեղ գտնվի" + "\n" + (arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ")));
            let column41 = +prompt("Ընտրեք, թե ՍՅԱՆ վրա որտեղ գտնվի" + "\n" + (arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ")));
            arr[row41][column41] = firstplayer;
            if (row41 === 0 && column41 ===1){
                arr[nolrow[2]][nolcolumn[0]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
            }else if (row41 === 0 && column41 ===2){
                arr[nolrow[2]][nolcolumn[0]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
            } else if (row41 === 2 && column41 ===0){
                arr[nolrow[0]][nolcolumn[2]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  "));
            }else if (row41 === 2 && column41 ===1){
                arr[nolrow[2]][nolcolumn[0]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
            }else if (row41 === 2 && column41 ===2){
                arr[nolrow[2]][nolcolumn[0]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
            }
        }else if (row5 === 2 && column5 ===0){
            arr[nolrow[0]][nolcolumn[2]] = computer;
            alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  "));
            let row42 = +prompt("Ընտրեք, թե ՏՈՂԻ վրա որտեղ գտնվի" + "\n" + (arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ")));
            let column42 = +prompt("Ընտրեք, թե ՍՅԱՆ վրա որտեղ գտնվի" + "\n" + (arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ")));
            arr[row42][column42] = firstplayer;
            if (row42 === 0 && column42 ===1){
                arr[nolrow[2]][nolcolumn[1]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  "));
            }else if (row42 === 1 && column42 ===0){
                arr[nolrow[0]][nolcolumn[1]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
            }else if (row42 === 1 && column42 ===2){
                arr[nolrow[0]][nolcolumn[1]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
            }else if (row42 === 2 && column42 ===1){
                arr[nolrow[0]][nolcolumn[1]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
            }else if (row42 === 2 && column42 ===2){
                arr[nolrow[0]][nolcolumn[1]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
            }
        }else if (row5 === 2 && column5 ===1){
            arr[nolrow[0]][nolcolumn[1]] = computer;
            alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  "));
            let row43 = +prompt("Ընտրեք, թե ՏՈՂԻ վրա որտեղ գտնվի" + "\n" + (arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ")));
            let column43 = +prompt("Ընտրեք, թե ՍՅԱՆ վրա որտեղ գտնվի" + "\n" + (arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ")));
            arr[row43][column43] = firstplayer;
            if (row43 === 0 && column43 ===2){
                arr[nolrow[2]][nolcolumn[0]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  "));
            }else if (row43 === 1 && column43 ===0){
                arr[nolrow[0]][nolcolumn[2]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
            }else if (row43 === 1 && column43 ===0){
                arr[nolrow[0]][nolcolumn[2]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
            }else if (row43 === 1 && column43 ===2){
                arr[nolrow[0]][nolcolumn[2]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
            }else if (row43 === 2 && column43 ===0){
                arr[nolrow[0]][nolcolumn[2]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
            }else if (row43 === 2 && column43 ===2){
                arr[nolrow[0]][nolcolumn[2]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
            }
        }else if (row5 === 2 && column5 ===2){
            arr[nolrow[0]][nolcolumn[2]] = computer;
            alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  "));
            let row44 = +prompt("Ընտրեք, թե ՏՈՂԻ վրա որտեղ գտնվի" + "\n" + (arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ")));
            let column44 = +prompt("Ընտրեք, թե ՍՅԱՆ վրա որտեղ գտնվի" + "\n" + (arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ")));
            arr[row44][column44] = firstplayer;
            if (row44 === 0 && column44 ===1){
                arr[nolrow[2]][nolcolumn[1]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  "));
            }else if (row44 === 1 && column44 ===0){
                arr[nolrow[0]][nolcolumn[1]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
            }else if (row44 === 1 && column44 ===2){
                arr[nolrow[0]][nolcolumn[1]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
            }else if (row44 === 2 && column44 ===0){
                arr[nolrow[0]][nolcolumn[1]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
            }else if (row44 === 2 && column44 ===1){
                arr[nolrow[0]][nolcolumn[1]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
            }
        }
    }else if (row === 1 && column ===2){
        arr[nolrow[1]][nolcolumn[1]] = computer;
        alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  "));
        let row6 = +prompt("Ընտրեք, թե ՏՈՂԻ վրա որտեղ գտնվի" + "\n" + (arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ")));
        let column6 = +prompt("Ընտրեք, թե ՍՅԱՆ վրա որտեղ գտնվի" + "\n" + (arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ")));
        arr[row6][column6] = firstplayer;
        if (row6 === 0 && column6 ===0){
            arr[nolrow[0]][nolcolumn[2]] = computer;
            alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  "));
            let row45 = +prompt("Ընտրեք, թե ՏՈՂԻ վրա որտեղ գտնվի" + "\n" + (arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ")));
            let column45 = +prompt("Ընտրեք, թե ՍՅԱՆ վրա որտեղ գտնվի" + "\n" + (arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ")));
            arr[row45][column45] = firstplayer;
            if (row45 === 0 && column45 ===1){
                arr[nolrow[2]][nolcolumn[0]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
            }else if (row45 === 1 && column45 ===0){
                arr[nolrow[2]][nolcolumn[0]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
            }else if (row45 === 2 && column45 ===0){
                arr[nolrow[1]][nolcolumn[0]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  "));
            }else if (row45 === 2 && column45 ===1){
                arr[nolrow[2]][nolcolumn[0]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
            }else if (row45 === 2 && column45 ===2){
                arr[nolrow[2]][nolcolumn[0]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
            }
        }else if (row6 === 0 && column6 ===1){
            arr[nolrow[0]][nolcolumn[2]] = computer;
            alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  "));
            let row46 = +prompt("Ընտրեք, թե ՏՈՂԻ վրա որտեղ գտնվի" + "\n" + (arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ")));
            let column46 = +prompt("Ընտրեք, թե ՍՅԱՆ վրա որտեղ գտնվի" + "\n" + (arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ")));
            arr[row46][column46] = firstplayer;
            if (row46 === 0 && column46 ===0){
                arr[nolrow[2]][nolcolumn[0]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
            }else if (row46 === 1 && column46 ===0){
                arr[nolrow[2]][nolcolumn[0]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
            }else if (row46 === 2 && column46 ===0){
                arr[nolrow[0]][nolcolumn[0]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  "));
            }else if (row46 === 2 && column46 ===1){
                arr[nolrow[2]][nolcolumn[0]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
            }else if (row46 === 2 && column46 ===2){
                arr[nolrow[2]][nolcolumn[0]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
            }
        }else if (row6 === 0 && column6 ===2){
            arr[nolrow[2]][nolcolumn[2]] = computer;
            alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  "));
            let row47 = +prompt("Ընտրեք, թե ՏՈՂԻ վրա որտեղ գտնվի" + "\n" + (arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ")));
            let column47 = +prompt("Ընտրեք, թե ՍՅԱՆ վրա որտեղ գտնվի" + "\n" + (arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ")));
            arr[row47][column47] = firstplayer;
            if (row47 === 0 && column47 ===0){
                arr[nolrow[0]][nolcolumn[1]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  "));
            }else if (row47 === 0 && column47 ===1){
                arr[nolrow[0]][nolcolumn[0]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
            }else if (row47 === 1 && column47 ===0){
                arr[nolrow[0]][nolcolumn[0]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
            }else if (row47 === 2 && column47 ===0){
                arr[nolrow[0]][nolcolumn[0]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
            }else if (row47 === 2 && column47 ===1){
                arr[nolrow[0]][nolcolumn[0]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
            }
        }else if (row6 === 1 && column6 ===0){
            arr[nolrow[0]][nolcolumn[2]] = computer;
            alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  "));
            let row48 = +prompt("Ընտրեք, թե ՏՈՂԻ վրա որտեղ գտնվի" + "\n" + (arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ")));
            let column48 = +prompt("Ընտրեք, թե ՍՅԱՆ վրա որտեղ գտնվի" + "\n" + (arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ")));
            arr[row48][column48] = firstplayer;
            if (row48 === 0 && column48 ===0){
                arr[nolrow[2]][nolcolumn[0]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
            }else if (row48 === 0 && column48 ===1){
                arr[nolrow[2]][nolcolumn[0]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
            }else if (row48 === 2 && column48 ===0){
                arr[nolrow[0]][nolcolumn[0]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ")+ "ԷԼի եսեմ կրելու");
            }else if (row48 === 2 && column48 ===1){
                arr[nolrow[2]][nolcolumn[0]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
            }else if (row48 === 2 && column48 ===2){
                arr[nolrow[2]][nolcolumn[0]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
            }
        }else if (row6 === 2 && column6 ===0){
            arr[nolrow[2]][nolcolumn[2]] = computer;
            alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  "));
            let row49 = +prompt("Ընտրեք, թե ՏՈՂԻ վրա որտեղ գտնվի" + "\n" + (arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ")));
            let column49 = +prompt("Ընտրեք, թե ՍՅԱՆ վրա որտեղ գտնվի" + "\n" + (arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ")));
            arr[row49][column49] = firstplayer;
            if (row49 === 0 && column49 ===0){
                arr[nolrow[0]][nolcolumn[2]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  "));
            }else if (row49 === 0 && column49 ===1){
                arr[nolrow[0]][nolcolumn[0]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
            }else if (row49 === 0 && column49 ===2){
                arr[nolrow[0]][nolcolumn[0]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
            }else if (row49 === 1 && column49 ===0){
                arr[nolrow[0]][nolcolumn[0]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
            }else if (row49 === 2 && column49 ===1){
                arr[nolrow[0]][nolcolumn[0]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
            }
        }else if (row6 === 2 && column6 ===1){
            arr[nolrow[2]][nolcolumn[2]] = computer;
            alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  "));
            let row50 = +prompt("Ընտրեք, թե ՏՈՂԻ վրա որտեղ գտնվի" + "\n" + (arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ")));
            let column50 = +prompt("Ընտրեք, թե ՍՅԱՆ վրա որտեղ գտնվի" + "\n" + (arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ")));
            arr[row50][column50] = firstplayer;
            if (row50 === 0 && column50 ===0){
                arr[nolrow[0]][nolcolumn[2]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  "));
            }else if (row50 === 0 && column50 ===1){
                arr[nolrow[0]][nolcolumn[0]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
            }else if (row50 === 0 && column50 ===2){
                arr[nolrow[0]][nolcolumn[0]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
            }else if (row50 === 1 && column50 ===0){
                arr[nolrow[0]][nolcolumn[0]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
            }else if (row50 === 2 && column50 ===0){
                arr[nolrow[0]][nolcolumn[0]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
            }
        }else if (row6 === 2 && column6 ===2){
            arr[nolrow[0]][nolcolumn[2]] = computer;
            alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  "));
            let row51 = +prompt("Ընտրեք, թե ՏՈՂԻ վրա որտեղ գտնվի" + "\n" + (arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ")));
            let column51 = +prompt("Ընտրեք, թե ՍՅԱՆ վրա որտեղ գտնվի" + "\n" + (arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ")));
            arr[row51][column51] = firstplayer;
            if (row51 === 0 && column51 ===0){
                arr[nolrow[2]][nolcolumn[0]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
            }else if (row51 === 0 && column51 ===1){
                arr[nolrow[2]][nolcolumn[0]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
            }else if (row51 === 1 && column51 ===0){
                arr[nolrow[2]][nolcolumn[0]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
            }else if (row51 === 2 && column51 ===0){
                arr[nolrow[2]][nolcolumn[1]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  "));
            }else if (row51 === 2 && column51 ===1){
                arr[nolrow[2]][nolcolumn[0]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
            }
        }
    }else if (row === 2 && column ===0){
        arr[nolrow[1]][nolcolumn[1]] = computer;
        alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  "));
        let row7 = +prompt("Ընտրեք, թե ՏՈՂԻ վրա որտեղ գտնվի" + "\n" + (arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ")));
        let column7 = +prompt("Ընտրեք, թե ՍՅԱՆ վրա որտեղ գտնվի" + "\n" + (arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ")));
        arr[row7][column7] = firstplayer;
        if (row7 === 0 && column7 ===0){
            arr[nolrow[1]][nolcolumn[0]] = computer;
            alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  "));
            let row52 = +prompt("Ընտրեք, թե ՏՈՂԻ վրա որտեղ գտնվի" + "\n" + (arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ")));
            let column52 = +prompt("Ընտրեք, թե ՍՅԱՆ վրա որտեղ գտնվի" + "\n" + (arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ")));
            arr[row52][column52] = firstplayer;
            if (row52 === 0 && column52 ===1){
                arr[nolrow[1]][nolcolumn[2]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
            }else if (row52 === 0 && column52 ===2){
                arr[nolrow[1]][nolcolumn[2]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
            }else if (row52 === 1 && column52 ===2){
                arr[nolrow[0]][nolcolumn[1]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  "));
            }else if (row52 === 2 && column52 ===1){
                arr[nolrow[1]][nolcolumn[2]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
            }else if (row52 === 2 && column52 ===2){
                arr[nolrow[1]][nolcolumn[2]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
            }
        }else if (row7 === 0 && column7 ===1){
            arr[nolrow[0]][nolcolumn[0]] = computer;
            alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  "));
            let row53 = +prompt("Ընտրեք, թե ՏՈՂԻ վրա որտեղ գտնվի" + "\n" + (arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ")));
            let column53 = +prompt("Ընտրեք, թե ՍՅԱՆ վրա որտեղ գտնվի" + "\n" + (arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ")));
            arr[row53][column53] = firstplayer;
            if (row53 === 0 && column53 ===2){
                arr[nolrow[2]][nolcolumn[2]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
            }else if (row53 === 1 && column53 ===0){
                arr[nolrow[2]][nolcolumn[2]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
            }else if (row53 === 1 && column53 ===2){
                arr[nolrow[2]][nolcolumn[2]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
            }else if (row53 === 2 && column53 ===1){
                arr[nolrow[2]][nolcolumn[2]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
            }else if (row53 === 2 && column53 ===2){
                arr[nolrow[2]][nolcolumn[1]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
            }
        }else if (row7 === 0 && column7 ===2){
            arr[nolrow[1]][nolcolumn[2]] = computer;
            alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  "));
            let row54 = +prompt("Ընտրեք, թե ՏՈՂԻ վրա որտեղ գտնվի" + "\n" + (arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ")));
            let column54 = +prompt("Ընտրեք, թե ՍՅԱՆ վրա որտեղ գտնվի" + "\n" + (arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ")));
            arr[row54][column54] = firstplayer;
            if (row54 === 0 && column54 ===0){
                arr[nolrow[1]][nolcolumn[0]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
            }else if (row54 === 0 && column54 ===1){
                arr[nolrow[1]][nolcolumn[0]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
            }else if (row54 === 1 && column54 ===0){
                arr[nolrow[0]][nolcolumn[0]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  "));
            }else if (row54 === 2 && column54 ===1){
                arr[nolrow[1]][nolcolumn[0]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
            }else if (row54 === 2 && column54 ===2){
                arr[nolrow[1]][nolcolumn[0]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
            }
        }else if (row7 === 1 && column7 ===0){
            arr[nolrow[0]][nolcolumn[0]] = computer;
            alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  "));
            let row55 = +prompt("Ընտրեք, թե ՏՈՂԻ վրա որտեղ գտնվի" + "\n" + (arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ")));
            let column55 = +prompt("Ընտրեք, թե ՍՅԱՆ վրա որտեղ գտնվի" + "\n" + (arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ")));
            arr[row55][column55] = firstplayer;
            if (row55 === 0 && column55 ===1){
                arr[nolrow[2]][nolcolumn[2]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
            }else if (row55 === 0 && column55 ===2){
                arr[nolrow[2]][nolcolumn[2]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
            }else if (row55 === 1 && column55 ===2){
                arr[nolrow[2]][nolcolumn[2]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
            }else if (row55 === 2 && column55 ===1){
                arr[nolrow[2]][nolcolumn[2]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
            }else if (row55 === 2 && column55 ===2){
                arr[nolrow[2]][nolcolumn[1]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  "));
            }
        }else if (row7 === 1 && column7 ===2){
            arr[nolrow[2]][nolcolumn[2]] = computer;
            alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  "));
            let row56 = +prompt("Ընտրեք, թե ՏՈՂԻ վրա որտեղ գտնվի" + "\n" + (arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ")));
            let column56 = +prompt("Ընտրեք, թե ՍՅԱՆ վրա որտեղ գտնվի" + "\n" + (arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ")));
            arr[row56][column56] = firstplayer;
            if (row56 === 0 && column56 ===0){
                arr[nolrow[1]][nolcolumn[0]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  "));
            }else if (row56 === 0 && column56 ===1){
                arr[nolrow[0]][nolcolumn[0]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
            }else if (row56 === 0 && column56 ===2){
                arr[nolrow[0]][nolcolumn[0]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
            }else if (row56 === 1 && column56 ===0){
                arr[nolrow[0]][nolcolumn[0]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
            }else if (row56 === 2 && column56 ===1){
                arr[nolrow[0]][nolcolumn[0]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
            }
        }else if (row7 === 2 && column7 ===1){
            arr[nolrow[2]][nolcolumn[2]] = computer;
            alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  "));
            let row57 = +prompt("Ընտրեք, թե ՏՈՂԻ վրա որտեղ գտնվի" + "\n" + (arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ")));
            let column57 = +prompt("Ընտրեք, թե ՍՅԱՆ վրա որտեղ գտնվի" + "\n" + (arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ")));
            arr[row57][column57] = firstplayer;
            if (row57 === 0 && column57 ===0){
                arr[nolrow[1]][nolcolumn[0]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  "));
            }else if (row57 === 0 && column57 ===1){
                arr[nolrow[0]][nolcolumn[0]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
            }else if (row57 === 0 && column57 ===2){
                arr[nolrow[0]][nolcolumn[0]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
            }else if (row57 === 1 && column57 ===0){
                arr[nolrow[0]][nolcolumn[0]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
            }else if (row57 === 2 && column57 ===2){
                arr[nolrow[0]][nolcolumn[0]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
            }
        }else if (row7 === 2 && column7 ===2){
            arr[nolrow[2]][nolcolumn[1]] = computer;
            alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  "));
            let row58 = +prompt("Ընտրեք, թե ՏՈՂԻ վրա որտեղ գտնվի" + "\n" + (arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ")));
            let column58 = +prompt("Ընտրեք, թե ՍՅԱՆ վրա որտեղ գտնվի" + "\n" + (arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ")));
            arr[row58][column58] = firstplayer;
            if (row58 === 0 && column58 ===0){
                arr[nolrow[0]][nolcolumn[1]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
            }else if (row58 === 0 && column58 ===1){
                arr[nolrow[0]][nolcolumn[0]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  "));
            }else if (row58 === 1 && column58 ===0){
                arr[nolrow[0]][nolcolumn[1]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
            }else if (row58 === 1 && column58 ===2){
                arr[nolrow[0]][nolcolumn[1]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
            }
        }
    }else if (row === 2 && column ===1){
        arr[nolrow[1]][nolcolumn[1]] = computer;
        alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  "));
        let row8 = +prompt("Ընտրեք, թե ՏՈՂԻ վրա որտեղ գտնվի" + "\n" + (arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ")));
        let column8 = +prompt("Ընտրեք, թե ՍՅԱՆ վրա որտեղ գտնվի" + "\n" + (arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ")));
        arr[row8][column8] = firstplayer;
        if (row8 === 0 && column8 ===0){
            arr[nolrow[2]][nolcolumn[0]] = computer;
            alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  "));
            let row59 = +prompt("Ընտրեք, թե ՏՈՂԻ վրա որտեղ գտնվի" + "\n" + (arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ")));
            let column59 = +prompt("Ընտրեք, թե ՍՅԱՆ վրա որտեղ գտնվի" + "\n" + (arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ")));
            arr[row59][column59] = firstplayer;
            if (row59 === 0 && column59 ===1){
                arr[nolrow[0]][nolcolumn[2]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
            }else if (row59 === 0 && column59 ===2){
                arr[nolrow[1]][nolcolumn[2]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  "));
            }else if (row59 === 1 && column59 ===0){
                arr[nolrow[0]][nolcolumn[2]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
            }else if (row59 === 1 && column59 ===2){
                arr[nolrow[0]][nolcolumn[2]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
            }else if (row59 === 2 && column59 ===2){
                arr[nolrow[0]][nolcolumn[2]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
            }
        }else if (row8 === 0 && column8 ===1){
            arr[nolrow[0]][nolcolumn[0]] = computer;
            alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  "));
            let row60 = +prompt("Ընտրեք, թե ՏՈՂԻ վրա որտեղ գտնվի" + "\n" + (arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ")));
            let column60 = +prompt("Ընտրեք, թե ՍՅԱՆ վրա որտեղ գտնվի" + "\n" + (arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ")));
            arr[row60][column60] = firstplayer;
            if (row60 === 0 && column60 ===2){
                arr[nolrow[2]][nolcolumn[2]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
            }else if (row60 === 1 && column60 ===0){
                arr[nolrow[2]][nolcolumn[2]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
            }else if (row60 === 1 && column60 ===2){
                arr[nolrow[2]][nolcolumn[2]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
            }else if (row60 === 2 && column60 ===0){
                arr[nolrow[2]][nolcolumn[2]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
            }else if (row60 === 2 && column60 ===2){
                arr[nolrow[2]][nolcolumn[0]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  "));
            }
        }else if (row8 === 0 && column8 ===2){
            arr[nolrow[2]][nolcolumn[2]] = computer;
            alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  "));
            let row61 = +prompt("Ընտրեք, թե ՏՈՂԻ վրա որտեղ գտնվի" + "\n" + (arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ")));
            let column61 = +prompt("Ընտրեք, թե ՍՅԱՆ վրա որտեղ գտնվի" + "\n" + (arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ")));
            arr[row61][column61] = firstplayer;
            if (row61 === 0 && column61 ===0){
                arr[nolrow[0]][nolcolumn[1]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  "));
            }else if (row61 === 0 && column61 ===1){
                arr[nolrow[0]][nolcolumn[0]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
            }else if (row61 === 1 && column61 ===0){
                arr[nolrow[0]][nolcolumn[0]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
            }else if (row61 === 1 && column61 ===2){
                arr[nolrow[0]][nolcolumn[0]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
            }else if (row61 === 2 && column61 ===0){
                arr[nolrow[0]][nolcolumn[0]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
            }
        }else if (row8 === 1 && column8 ===0){
            arr[nolrow[2]][nolcolumn[0]] = computer;
            alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  "));
            let row62 = +prompt("Ընտրեք, թե ՏՈՂԻ վրա որտեղ գտնվի" + "\n" + (arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ")));
            let column62 = +prompt("Ընտրեք, թե ՍՅԱՆ վրա որտեղ գտնվի" + "\n" + (arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ")));
            arr[row62][column62] = firstplayer;
            if (row62 === 0 && column62 ===0){
                arr[nolrow[0]][nolcolumn[2]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
            }else if (row62 === 0 && column62 ===1){
                arr[nolrow[0]][nolcolumn[2]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
            }else if (row62 === 0 && column62 ===2){
                arr[nolrow[0]][nolcolumn[0]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  "));
            }else if (row62 === 1 && column62 ===2){
                arr[nolrow[0]][nolcolumn[2]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
            }else if (row62 === 2 && column62 ===2){
                arr[nolrow[0]][nolcolumn[2]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
            }
        }else if (row8 === 1 && column8 ===2){
            arr[nolrow[2]][nolcolumn[2]] = computer;
            alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  "));
            let row63 = +prompt("Ընտրեք, թե ՏՈՂԻ վրա որտեղ գտնվի" + "\n" + (arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ")));
            let column63 = +prompt("Ընտրեք, թե ՍՅԱՆ վրա որտեղ գտնվի" + "\n" + (arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ")));
            arr[row63][column63] = firstplayer;
            if (row63 === 0 && column63 ===0){
                arr[nolrow[0]][nolcolumn[2]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  "));
            }else if (row63 === 0 && column63 ===1){
                arr[nolrow[0]][nolcolumn[0]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
            }else if (row63 === 0 && column63 ===2){
                arr[nolrow[0]][nolcolumn[0]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
            }else if (row63 === 1 && column63 ===0){
                arr[nolrow[0]][nolcolumn[0]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
            }else if (row63 === 2 && column63 ===0){
                arr[nolrow[0]][nolcolumn[0]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
            }
        }else if (row8 === 2 && column8 ===0){
            arr[nolrow[2]][nolcolumn[2]] = computer;
            alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  "));
            let row64 = +prompt("Ընտրեք, թե ՏՈՂԻ վրա որտեղ գտնվի" + "\n" + (arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ")));
            let column64 = +prompt("Ընտրեք, թե ՍՅԱՆ վրա որտեղ գտնվի" + "\n" + (arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ")));
            arr[row64][column64] = firstplayer;
            if (row64 === 0 && column64 ===0){
                arr[nolrow[1]][nolcolumn[0]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  "));
            }else if (row64 === 0 && column64 ===1){
                arr[nolrow[0]][nolcolumn[0]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
            }else if (row64 === 0 && column64 ===2){
                arr[nolrow[0]][nolcolumn[0]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
            }else if (row64 === 1 && column64 ===0){
                arr[nolrow[0]][nolcolumn[0]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
            }else if (row64 === 1 && column64 ===2){
                arr[nolrow[0]][nolcolumn[0]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
            }
        }else if (row8 === 2 && column8 ===2){
            arr[nolrow[2]][nolcolumn[0]] = computer;
            alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  "));
            let row65 = +prompt("Ընտրեք, թե ՏՈՂԻ վրա որտեղ գտնվի" + "\n" + (arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ")));
            let column65 = +prompt("Ընտրեք, թե ՍՅԱՆ վրա որտեղ գտնվի" + "\n" + (arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ")));
            arr[row65][column65] = firstplayer;
            if (row65 === 0 && column65 ===0){
                arr[nolrow[0]][nolcolumn[2]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
            }else if (row65 === 0 && column65 ===1){
                arr[nolrow[0]][nolcolumn[2]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
            }else if (row65 === 0 && column65 ===2){
                arr[nolrow[1]][nolcolumn[2]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  "));
            }else if (row65 === 1 && column65 ===0){
                arr[nolrow[0]][nolcolumn[2]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
            }else if (row65 === 1 && column65 ===2){
                arr[nolrow[0]][nolcolumn[2]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
            }
        }
    }else if (row === 2 && column ===2){
        arr[nolrow[1]][nolcolumn[1]] = computer;
        alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  "));
        let row9 = +prompt("Ընտրեք, թե ՏՈՂԻ վրա որտեղ գտնվի" + "\n" + (arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ")));
        let column9 = +prompt("Ընտրեք, թե ՍՅԱՆ վրա որտեղ գտնվի" + "\n" + (arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ")));
        arr[row9][column9] = firstplayer;
        if (row9 === 0 && column9 ===0){
            arr[nolrow[0]][nolcolumn[1]] = computer;
            alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  "));
            let row66 = +prompt("Ընտրեք, թե ՏՈՂԻ վրա որտեղ գտնվի" + "\n" + (arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ")));
            let column66 = +prompt("Ընտրեք, թե ՍՅԱՆ վրա որտեղ գտնվի" + "\n" + (arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ")));
            arr[row66][column66] = firstplayer;
            if (row66 === 0 && column66 ===2){
                arr[nolrow[2]][nolcolumn[1]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
            }else if (row66 === 1 && column66 ===0){
                arr[nolrow[2]][nolcolumn[1]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
            }else if (row66 === 1 && column66 ===2){
                arr[nolrow[2]][nolcolumn[1]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
            }else if (row66 === 2 && column66 ===0){
                arr[nolrow[2]][nolcolumn[1]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
            }else if (row66 === 2 && column66 ===1){
                arr[nolrow[1]][nolcolumn[0]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  "));
            }
        }else if (row9 === 0 && column9 ===1){
            arr[nolrow[0]][nolcolumn[2]] = computer;
            alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  "));
            let row67 = +prompt("Ընտրեք, թե ՏՈՂԻ վրա որտեղ գտնվի" + "\n" + (arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ")));
            let column67 = +prompt("Ընտրեք, թե ՍՅԱՆ վրա որտեղ գտնվի" + "\n" + (arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ")));
            arr[row67][column67] = firstplayer;
            if (row67 === 0 && column67 ===0){
                arr[nolrow[2]][nolcolumn[0]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
            }else if (row67 === 1 && column67 ===0){
                arr[nolrow[2]][nolcolumn[0]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
            }else if (row67 === 1 && column67 ===2){
                arr[nolrow[2]][nolcolumn[0]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
            }else if (row67 === 2 && column67 ===0){
                arr[nolrow[2]][nolcolumn[1]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  "));
            }else if (row67 === 2 && column67 ===1){
                arr[nolrow[2]][nolcolumn[0]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
            }
        }else if (row9 === 0 && column9 ===2){
            arr[nolrow[1]][nolcolumn[2]] = computer;
            alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  "));
            let row68 = +prompt("Ընտրեք, թե ՏՈՂԻ վրա որտեղ գտնվի" + "\n" + (arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ")));
            let column68 = +prompt("Ընտրեք, թե ՍՅԱՆ վրա որտեղ գտնվի" + "\n" + (arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ")));
            arr[row68][column68] = firstplayer;
            if (row68 === 0 && column68 ===0){
                arr[nolrow[1]][nolcolumn[0]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
            }else if (row68 === 0 && column68 ===1){
                arr[nolrow[1]][nolcolumn[0]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
            }else if (row68 === 1 && column68 ===0){
                arr[nolrow[0]][nolcolumn[1]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  "));
            }else if (row68 === 2 && column68 ===0){
                arr[nolrow[1]][nolcolumn[0]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
            }else if (row68 === 2 && column68 ===1){
                arr[nolrow[1]][nolcolumn[0]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
            }
        }else if (row9 === 1 && column9 ===0){
            arr[nolrow[2]][nolcolumn[0]] = computer;
            alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  "));
            let row69 = +prompt("Ընտրեք, թե ՏՈՂԻ վրա որտեղ գտնվի" + "\n" + (arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ")));
            let column69 = +prompt("Ընտրեք, թե ՍՅԱՆ վրա որտեղ գտնվի" + "\n" + (arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ")));
            arr[row69][column69] = firstplayer;
            if (row69 === 0 && column69 ===0){
                arr[nolrow[0]][nolcolumn[2]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
            }else if (row69 === 0 && column69 ===1){
                arr[nolrow[0]][nolcolumn[2]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
            }else if (row69 === 0 && column69 ===2){
                arr[nolrow[1]][nolcolumn[2]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  "));
            }else if (row69 === 1 && column69 ===2){
                arr[nolrow[0]][nolcolumn[2]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
            }else if (row69 === 2 && column69 ===1){
                arr[nolrow[0]][nolcolumn[2]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
            }
        }else if (row9 === 1 && column9 ===2){
            arr[nolrow[0]][nolcolumn[2]] = computer;
            alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  "));
            let row70 = +prompt("Ընտրեք, թե ՏՈՂԻ վրա որտեղ գտնվի" + "\n" + (arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ")));
            let column70 = +prompt("Ընտրեք, թե ՍՅԱՆ վրա որտեղ գտնվի" + "\n" + (arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ")));
            arr[row70][column70] = firstplayer;
            if (row70 === 0 && column70 ===0){
                arr[nolrow[2]][nolcolumn[0]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
            }else if (row70 === 0 && column70 ===1){
                arr[nolrow[2]][nolcolumn[0]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
            }else if (row70 === 1 && column70 ===0){
                arr[nolrow[2]][nolcolumn[0]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
            }else if (row70 === 2 && column70 ===0){
                arr[nolrow[2]][nolcolumn[1]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  "));
            }else if (row70 === 2 && column70 ===1){
                arr[nolrow[2]][nolcolumn[0]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
            }
        }else if (row9 === 2 && column9 ===0){
            arr[nolrow[2]][nolcolumn[1]] = computer;
            alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  "));
            let row71 = +prompt("Ընտրեք, թե ՏՈՂԻ վրա որտեղ գտնվի" + "\n" + (arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ")));
            let column71 = +prompt("Ընտրեք, թե ՍՅԱՆ վրա որտեղ գտնվի" + "\n" + (arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ")));
            arr[row71][column71] = firstplayer;
            if (row71 === 0 && column71 ===0){
                arr[nolrow[0]][nolcolumn[1]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
            }else if (row71 === 0 && column71 ===1){
                arr[nolrow[1]][nolcolumn[0]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  "));
            }else if (row71 === 0 && column71 ===2){
                arr[nolrow[0]][nolcolumn[1]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
            }else if (row71 === 1 && column71 ===0){
                arr[nolrow[0]][nolcolumn[1]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
            }else if (row71 === 1 && column71 ===2){
                arr[nolrow[0]][nolcolumn[1]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
            }
        }else if (row9 === 2 && column9 ===1){
            arr[nolrow[2]][nolcolumn[0]] = computer;
            alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  "));
            let row72 = +prompt("Ընտրեք, թե ՏՈՂԻ վրա որտեղ գտնվի" + "\n" + (arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ")));
            let column72 = +prompt("Ընտրեք, թե ՍՅԱՆ վրա որտեղ գտնվի" + "\n" + (arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ")));
            arr[row72][column72] = firstplayer;
            if (row72 === 0 && column72 ===0){
                arr[nolrow[0]][nolcolumn[2]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
            }else if (row72 === 0 && column72 ===1){
                arr[nolrow[0]][nolcolumn[2]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
            }else if (row72 === 0 && column72 ===2){
                arr[nolrow[1]][nolcolumn[2]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  "));
            }else if (row72 === 1 && column72 ===0){
                arr[nolrow[0]][nolcolumn[2]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
            }else if (row72 === 1 && column72 ===2){
                arr[nolrow[0]][nolcolumn[2]] = computer;
                alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  ") + "\n" + "ՑԱՎՈՔ ԴՈՒՔ ՊԱՐՏՎԵՑԻՔ");
            }
        }
    }


alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  "));

// let row1 = +prompt("Ընտրեք, թե ՏՈՂԻ վրա որտեղ գտնվի" + "\n" + board);
// let column1 = +prompt("Ընտրեք, թե ՍՅԱՆ վրա որտեղ գտնվի" + "\n" + board);
//
// arr[row1][column1] = firstplayer;
//     if (row1 === 0 && column1 ===0){
//         arr[nolrow[1]][nolcolumn[0]] = computer;
//     }else if (row1 === 0 && column1 ===1){
//         arr[nolrow[1]][nolcolumn[0]] = computer;
//     }else if (row1 === 0 && column1 ===2){
//         arr[nolrow[1]][nolcolumn[0]] = computer;
//     }else if (row1 === 1 && column1 ===0){
//         arr[nolrow[0]][nolcolumn[2]] = computer;
//     }else if (row1 === 1 && column1 ===2){
//         arr[nolrow[1]][nolcolumn[0]] = computer;
//     }else if (row1 === 2 && column1 ===0){
//         arr[nolrow[1]][nolcolumn[0]] = computer;
//     }else if (row1 === 2 && column1 ===1){
//         arr[nolrow[1]][nolcolumn[0]] = computer;
//     }else if (row1 === 2 && column1 ===2){
//         arr[nolrow[1]][nolcolumn[0]] = computer;
//     }
//
// alert(arr[0].join("  ") + "\n" + arr[1].join("  ") + "\n" + arr[2].join("  "));


// if (arr[row][column] !== "_"){
//     alert("Դուք խախտել եք խաղի կանոնները");
// }
//     if (row === 0 && column ===2){
//         arr[nolrow[1]][nolcolumn[1]] = computer;
//     }
//     if (row === 1 && column ===0){
//         arr[nolrow[1]][nolcolumn[1]] = computer;
//     }
//     if (row === 1 && column ===1){
//         arr[nolrow[2]][nolcolumn[2]] = computer;
//     }
//     if (row === 1 && column ===2){
//         arr[nolrow[1]][nolcolumn[1]] = computer;
//     }
//     if (row === 2 && column ===0){
//         arr[nolrow[1]][nolcolumn[1]] = computer;
//     }
//     if (row === 2 && column ===1){
//         arr[nolrow[1]][nolcolumn[1]] = computer;
//     }
//     if (row === 2 && column ===2){
//         arr[nolrow[1]][nolcolumn[1]] = computer;
//     }
//
//
//     if (row === 0 && column ===1){
//         arr[nolrow[1]][nolcolumn[2]] = computer;
//     }
//     if (row === 0 && column ===1){
//         arr[nolrow[1]][nolcolumn[2]] = computer;
//     }
//     if (row === 0 && column ===2){
//         arr[nolrow[1]][nolcolumn[2]] = computer;
//     }
//     if (row === 1 && column ===0){
//         arr[nolrow[1]][nolcolumn[2]] = computer;
//     }
//     if (row === 1 && column ===1){
//         arr[nolrow[2]][nolcolumn[2]] = computer;
//     }
//     if (row === 1 && column ===2){
//         arr[nolrow[0]][nolcolumn[2]] = computer;
//     }
//     if (row === 2 && column ===0){
//         arr[nolrow[1]][nolcolumn[2]] = computer;
//     }
//     if (row === 2 && column ===1){
//         arr[nolrow[1]][nolcolumn[2]] = computer;
//     }
//     if (row === 2 && column ===2){
//         arr[nolrow[1]][nolcolumn[2]] = computer;
//     }




    // if (row === 0 && column ===2){
    //     arr[nolrow[2]][nolcolumn[1]] = computer;
    // }else if (row === 1 && column ===0){
    //     arr[nolrow[2]][nolcolumn[1]] = computer;
    // }else if (row === 1 && column ===1){
    //     arr[nolrow[2]][nolcolumn[1]] = computer;
    // }else if (row === 1 && column ===2){
    //     arr[nolrow[2]][nolcolumn[1]] = computer;
    // }else if (row === 2 && column ===0){
    //     arr[nolrow[2]][nolcolumn[1]] = computer;
    // }else if (row === 2 && column ===1){
    //     arr[nolrow[2]][nolcolumn[0]] = computer;
    // }else if (row === 2 && column ===2){
    //     arr[nolrow[2]][nolcolumn[1]] = computer;
    // }
    // if (row === 1 && column ===2){
    //     arr[nolrow[1]][nolcolumn[1]] = computer;
    // }






    // if (row === 2 && column === 2){
    //     arr[nolrow[1]][nolcolumn[2]] = computer;
    // }








    // if (firstplayer == "x"){
    //     firstplayer = "օ"
    // }else{
    //     firstplayer = "x";
    // }

// }
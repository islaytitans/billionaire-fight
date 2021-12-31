const useHealthBar = (maxWealth: number, currentWealth: number | null): [number, string] => {
  const wealthPercentage =
    currentWealth === null ? 100 : Math.round((currentWealth / maxWealth) * 100);

  let wealthBarWidthClass = "";
  switch (wealthPercentage) {
    case 0:
      wealthBarWidthClass = "w-[0%]";
      break;
    case 1:
      wealthBarWidthClass = "w-[1%]";
      break;
    case 2:
      wealthBarWidthClass = "w-[2%]";
      break;
    case 3:
      wealthBarWidthClass = "w-[3%]";
      break;
    case 4:
      wealthBarWidthClass = "w-[4%]";
      break;
    case 5:
      wealthBarWidthClass = "w-[5%]";
      break;
    case 6:
      wealthBarWidthClass = "w-[6%]";
      break;
    case 7:
      wealthBarWidthClass = "w-[7%]";
      break;
    case 8:
      wealthBarWidthClass = "w-[8%]";
      break;
    case 9:
      wealthBarWidthClass = "w-[9%]";
      break;
    case 10:
      wealthBarWidthClass = "w-[10%]";
      break;
    case 11:
      wealthBarWidthClass = "w-[11%]";
      break;
    case 12:
      wealthBarWidthClass = "w-[12%]";
      break;
    case 13:
      wealthBarWidthClass = "w-[13%]";
      break;
    case 14:
      wealthBarWidthClass = "w-[14%]";
      break;
    case 15:
      wealthBarWidthClass = "w-[15%]";
      break;
    case 16:
      wealthBarWidthClass = "w-[16%]";
      break;
    case 17:
      wealthBarWidthClass = "w-[17%]";
      break;
    case 18:
      wealthBarWidthClass = "w-[18%]";
      break;
    case 19:
      wealthBarWidthClass = "w-[19%]";
      break;
    case 20:
      wealthBarWidthClass = "w-[20%]";
      break;
    case 21:
      wealthBarWidthClass = "w-[21%]";
      break;
    case 22:
      wealthBarWidthClass = "w-[22%]";
      break;
    case 23:
      wealthBarWidthClass = "w-[23%]";
      break;
    case 24:
      wealthBarWidthClass = "w-[24%]";
      break;
    case 25:
      wealthBarWidthClass = "w-[25%]";
      break;
    case 26:
      wealthBarWidthClass = "w-[26%]";
      break;
    case 27:
      wealthBarWidthClass = "w-[27%]";
      break;
    case 28:
      wealthBarWidthClass = "w-[28%]";
      break;
    case 29:
      wealthBarWidthClass = "w-[29%]";
      break;
    case 30:
      wealthBarWidthClass = "w-[30%]";
      break;
    case 31:
      wealthBarWidthClass = "w-[31%]";
      break;
    case 32:
      wealthBarWidthClass = "w-[32%]";
      break;
    case 33:
      wealthBarWidthClass = "w-[33%]";
      break;
    case 34:
      wealthBarWidthClass = "w-[34%]";
      break;
    case 35:
      wealthBarWidthClass = "w-[35%]";
      break;
    case 36:
      wealthBarWidthClass = "w-[36%]";
      break;
    case 37:
      wealthBarWidthClass = "w-[37%]";
      break;
    case 38:
      wealthBarWidthClass = "w-[38%]";
      break;
    case 39:
      wealthBarWidthClass = "w-[39%]";
      break;
    case 40:
      wealthBarWidthClass = "w-[40%]";
      break;
    case 41:
      wealthBarWidthClass = "w-[41%]";
      break;
    case 42:
      wealthBarWidthClass = "w-[42%]";
      break;
    case 43:
      wealthBarWidthClass = "w-[43%]";
      break;
    case 44:
      wealthBarWidthClass = "w-[44%]";
      break;
    case 45:
      wealthBarWidthClass = "w-[45%]";
      break;
    case 46:
      wealthBarWidthClass = "w-[46%]";
      break;
    case 47:
      wealthBarWidthClass = "w-[47%]";
      break;
    case 48:
      wealthBarWidthClass = "w-[48%]";
      break;
    case 49:
      wealthBarWidthClass = "w-[49%]";
      break;
    case 50:
      wealthBarWidthClass = "w-[50%]";
      break;
    case 51:
      wealthBarWidthClass = "w-[51%]";
      break;
    case 52:
      wealthBarWidthClass = "w-[52%]";
      break;
    case 53:
      wealthBarWidthClass = "w-[53%]";
      break;
    case 54:
      wealthBarWidthClass = "w-[54%]";
      break;
    case 55:
      wealthBarWidthClass = "w-[55%]";
      break;
    case 56:
      wealthBarWidthClass = "w-[56%]";
      break;
    case 57:
      wealthBarWidthClass = "w-[57%]";
      break;
    case 58:
      wealthBarWidthClass = "w-[58%]";
      break;
    case 59:
      wealthBarWidthClass = "w-[59%]";
      break;
    case 60:
      wealthBarWidthClass = "w-[60%]";
      break;
    case 61:
      wealthBarWidthClass = "w-[61%]";
      break;
    case 62:
      wealthBarWidthClass = "w-[62%]";
      break;
    case 63:
      wealthBarWidthClass = "w-[63%]";
      break;
    case 64:
      wealthBarWidthClass = "w-[64%]";
      break;
    case 65:
      wealthBarWidthClass = "w-[65%]";
      break;
    case 66:
      wealthBarWidthClass = "w-[66%]";
      break;
    case 67:
      wealthBarWidthClass = "w-[67%]";
      break;
    case 68:
      wealthBarWidthClass = "w-[68%]";
      break;
    case 69:
      wealthBarWidthClass = "w-[69%]";
      break;
    case 70:
      wealthBarWidthClass = "w-[70%]";
      break;
    case 71:
      wealthBarWidthClass = "w-[71%]";
      break;
    case 72:
      wealthBarWidthClass = "w-[72%]";
      break;
    case 73:
      wealthBarWidthClass = "w-[73%]";
      break;
    case 74:
      wealthBarWidthClass = "w-[74%]";
      break;
    case 75:
      wealthBarWidthClass = "w-[75%]";
      break;
    case 76:
      wealthBarWidthClass = "w-[76%]";
      break;
    case 77:
      wealthBarWidthClass = "w-[77%]";
      break;
    case 78:
      wealthBarWidthClass = "w-[78%]";
      break;
    case 79:
      wealthBarWidthClass = "w-[79%]";
      break;
    case 80:
      wealthBarWidthClass = "w-[80%]";
      break;
    case 81:
      wealthBarWidthClass = "w-[81%]";
      break;
    case 82:
      wealthBarWidthClass = "w-[82%]";
      break;
    case 83:
      wealthBarWidthClass = "w-[83%]";
      break;
    case 84:
      wealthBarWidthClass = "w-[84%]";
      break;
    case 85:
      wealthBarWidthClass = "w-[85%]";
      break;
    case 86:
      wealthBarWidthClass = "w-[86%]";
      break;
    case 87:
      wealthBarWidthClass = "w-[87%]";
      break;
    case 88:
      wealthBarWidthClass = "w-[88%]";
      break;
    case 89:
      wealthBarWidthClass = "w-[89%]";
      break;
    case 90:
      wealthBarWidthClass = "w-[90%]";
      break;
    case 91:
      wealthBarWidthClass = "w-[91%]";
      break;
    case 92:
      wealthBarWidthClass = "w-[92%]";
      break;
    case 93:
      wealthBarWidthClass = "w-[93%]";
      break;
    case 94:
      wealthBarWidthClass = "w-[94%]";
      break;
    case 95:
      wealthBarWidthClass = "w-[95%]";
      break;
    case 96:
      wealthBarWidthClass = "w-[96%]";
      break;
    case 97:
      wealthBarWidthClass = "w-[97%]";
      break;
    case 98:
      wealthBarWidthClass = "w-[98%]";
      break;
    case 99:
      wealthBarWidthClass = "w-[99%]";
      break;
    case 100:
    default:
      wealthBarWidthClass = "w-[100%]";
      break;
  }

  return [wealthPercentage, wealthBarWidthClass];
};

export default useHealthBar;


// Format with ,
export const formatNumber = (val: number | string | undefined) => {
    if (val) {
      let x = val.toString();
      var parts = x.toString().split(",");
      parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      return parts.join(".");
    }
  
    if (val === 0) {
      return 0;
    }
  
    return "NaN";
  };
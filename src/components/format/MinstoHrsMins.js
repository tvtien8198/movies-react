const MinstoHrsMins = (mins) => {
    if(mins) {
        let h = Math.floor(mins / 60);
        let m = mins % 60;
        h = h < 10 ? + h : h;
        m = m < 10 ? '0' + m : m;
        return `${h}h ${m}min`;
    }
    
  }

export default MinstoHrsMins

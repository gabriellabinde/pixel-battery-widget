// ==========================================
// ʕ•́ᴥ•̀ʔっ PIXEL HEART BATTERY STATUS WIDGET
// BY GABRIELLA BINDE • APRIL 2026
// ==========================================

export const refreshFrequency = 30000;

export const command = `
pmset -g batt | grep -Eo "[0-9]+%" | head -1 | cut -d% -f1
`;

export const className = `
  position: fixed;
  top: 120px;
  right: 100px;
`;

const heart = [
  [0,1,1,0,1,1,0],
  [1,2,2,1,2,2,1],
  [1,2,2,2,2,2,1],
  [0,1,2,2,2,1,0],
  [0,0,1,2,1,0,0],
  [0,0,0,1,0,0,0],
];

const emptyHeart = [
  [0,1,1,0,1,1,0],
  [1,0,0,1,0,0,1],
  [1,0,0,0,0,0,1],
  [0,1,0,0,0,1,0],
  [0,0,1,0,1,0,0],
  [0,0,0,1,0,0,0],
];

const PixelHeart = ({ full }) => {
  const data = full ? heart : emptyHeart;

  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(7, 3px)",
      gap: "0px",
      marginRight: "2px"
    }}>
      {data.flat().map((cell, index) => (
        <div
          key={index}
          style={{
            width: "3px",
            height: "3px",
            background:
              cell === 1 ? "#000000" :
              cell === 2 ? "#ff2a3d" :
              "transparent"
          }}
        />
      ))}
    </div>
  );
};

export const render = ({ output }) => {
  const battery = Number(output.trim());
  const fullHearts = Math.ceil(battery / 10);

  return (
    <div style={{
      display: "flex",
      alignItems: "center"
    }}>
      {Array.from({ length: 10 }).map((_, index) => (
        <PixelHeart key={index} full={index < fullHearts} />
      ))}
    </div>
  );
};

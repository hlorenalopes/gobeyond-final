fetch('https://jsonplaceholder.typicode.com/photos?_start=0&_limit=4')
  .then((response) => response.json())
  .then((data) => console.log(data));

//troca '600' por '1128x667'. Ex.: uma url https://via.placeholder.com/600/92c952 vira https://via.placeholder.com/1128x667/92c952

// {content.map(({ thumbnailUrl }, index) => (
//   <button
//     key={index}
//     onClick={() => setActiveContent(index)}
//     className={`${
//       index === activeContent ? 'tab-active' : 'tab-inactive'
//     }`}
//     style={{ backgroundImage: `url${thumbnailUrl}` }}
//   ></button>
// ))}

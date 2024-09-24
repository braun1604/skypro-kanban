import { Card } from "../Card/Card";

export function Column({ title, tasks }) {
  return (
    <div className="main__column column">
      <div className="column__title">
        <p>{title}</p>
      </div>
      <div className="cards">
        {tasks.map((item) => {
          return (
            <Card
              key={item.id}
              topic={item.topic}
              title={item.title}
              date={item.date}
              color={item.color}
              colorText={item.colorText}
            />
          );
        })}
      </div>
    </div>
  );
}

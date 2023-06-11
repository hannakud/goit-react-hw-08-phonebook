import css from './Home.module.css';

export default function Home() {
  return (
    <div className={css.container}>
      <h1 className={css.title}>
        Миротворець. Здай колаборанта!
        <span role="img" aria-label="Greeting icon">
          💁‍♀️
        </span>
      </h1>
    </div>
  );
}

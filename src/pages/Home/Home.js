import css from './Home.module.css';
import { Card } from '@mui/material';

export default function Home() {
  return (
    <div className={css.container}>
      <Card className={css.card}>
        <h1 className={css.title}>
          Е-Ворог. Здай колаборанта!
          <span role="img" aria-label="Greeting icon">
            💁‍♀️
          </span>
        </h1>
      </Card>
    </div>
  );
}

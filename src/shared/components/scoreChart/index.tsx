import  {  CircularProgressbar, buildStyles  }  from  "react-circular-progressbar" ; 
import  "react-circular-progressbar/dist/styles.css" ;

import { Container_Styles } from "./styles";

interface ScoreChartProps {
  voteAverage: number;
};

export function ScoreChart ({ voteAverage }: ScoreChartProps) {
    let percentage = (voteAverage / 100) * 10;

  return (
    <Container_Styles>
      <div>
          <CircularProgressbar 
            value={percentage} 
            maxValue={1}
            text={`${Math.ceil(voteAverage * 10)}%`}
            styles={buildStyles({
                rotation: 0.5 + (1 - percentage / 100) / 2,
                pathColor: '#14FF00',
                textColor: '#14FF00',
                trailColor: '#FFFFFF',
                backgroundColor: '#14FF00',
            })}
          />;
        </div>
        <p>Avaliação dos usuários.</p>
    </Container_Styles>
  );
};
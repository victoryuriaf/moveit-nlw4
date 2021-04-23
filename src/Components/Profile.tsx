import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';

export function Profile() {
      const { level } = useContext(ChallengesContext);

      return (
            <div className={styles.profileContainer}>
                  <img src="https://media-exp1.licdn.com/dms/image/C4D03AQHCiiz4ejmobQ/profile-displayphoto-shrink_800_800/0/1611538624444?e=1619654400&v=beta&t=03yc8t2WAx1mbAuMtbo7ivemno-GfXY9GPhCS5L7tUU" alt="Victor Yuri"/>
                  <div>
                        <strong>Victor Yuri</strong>
                        <p>
                              <img src="icons/level.svg" alt="Level"/>
                              Level {level}
                        </p>
                  </div>
            </div>
      )
}
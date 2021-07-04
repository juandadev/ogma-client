import React from "react";
import styles from "@styles/SkillCard.module.scss";
import ProgressBar from "@components/ProgressCircleBar";
import { ChevronRightIcon } from "@icons";

const SkillCard = ({ progress, image, techName, onClick }) => (
  <div className={styles.SkillCard} onClick={onClick} >
    <div className={styles.SkillCard__Progress}>
      <ProgressBar
        progress={progress}
        image={image}
        techName={techName}
      />
    </div>
    <div className={styles.SkillCard__Wrapper}>
      <p className={styles.SkillCard__Text}>{techName}</p>
      <ChevronRightIcon size={20} className={styles.SkillCard__Icon} />
    </div>
  </div>
);

export default SkillCard;

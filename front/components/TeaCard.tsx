import styles from "./css/TeaCard.module.css";

export type Tea = {
  name: string;
  color: string;
};
export interface TeaCardProps {
  tea: Tea;
}
const TeaCard = ({ tea }: TeaCardProps) => {
  return (
    <div className={styles.teaground}>
      <h3>{tea.name}</h3>
      <p>Color: {tea.color}</p>
    </div>
  );
};

export default TeaCard;

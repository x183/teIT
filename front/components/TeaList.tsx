import TeaCard, { Tea } from "./TeaCard";

export interface TeaListProps {
  teas: Tea[];
  title: string;
}

const TeaList = ({ teas, title }: TeaListProps) => {
  return (
    <>
      <h2>{title}</h2>
      {teas.map((tea) => (
        <TeaCard tea={tea} key={tea.name} />
      ))}
    </>
  );
};

export default TeaList;

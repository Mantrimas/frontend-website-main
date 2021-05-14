import Container from 'react-bootstrap/Container';
import Chart from "react-google-charts";

const Inflow = () => {
  return (
    <Container className="p-3" style={{
      marginTop: "2.5vw",
      backgroundColor: "#add8e669",
      color: "#17a2b8"
    }}>
      Inflow overview

      <Chart
        width={'500px'}
        height={'300px'}
        chartType="PieChart"
        loader={<div>Loading Chart</div>}
        data={[
          ['Task', 'Hours per Day'],
          ['Work', 11],
          ['Eat', 2],
          ['Commute', 2],
          ['Watch TV', 2],
          ['Sleep', 7],
        ]}
        options={{
          title: 'Inflow funds',
          backgroundColor: '#17a2b8',
          titleTextStyle: {
            color: 'lightcyan'
        }
        }}
        rootProps={{ 'data-testid': '1' }}
      />
    </Container>
  );
}

export default Inflow;

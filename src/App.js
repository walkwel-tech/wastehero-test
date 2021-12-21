import { Breadcrumb } from 'antd';
import './App.css';
import StyledBreadCrumb from './components/StyledBreadCrumb';
import StyledTag from './components/StyledTag';
import styled from 'styled-components';

const OrangeCrumbItem = styled(Breadcrumb.Item)`
color: orange;
`

function App() {
  const crumbs = ['setting', 'company-settings', 'project-settings'];

  const crumbs2 = [
    'settings',
    (index) => {
        return (
          <Breadcrumb.Item key={index}>
            not clickable
          </Breadcrumb.Item>
        )
    },
    (index) => {
      return (
        <OrangeCrumbItem key={index}>
          Hey this is not clickable
        </OrangeCrumbItem>
      )
  },
];

  return (
    <div className="App">
      <section style={{marginBottom: '10px'}}>
        <h2>WH-TEST-FE-1 StyledTag</h2>
        <div style={{marginTop: '10px'}}>
          <StyledTag color="blue">Styled Tag</StyledTag>
        </div>
        <div style={{marginTop: '10px'}}>
          <StyledTag color="blue" variant='bordered'>Styled Tag</StyledTag>
        </div>
        <div style={{marginTop: '10px'}}>
          <StyledTag color="blue" bold={true}>Styled Tag</StyledTag>
        </div>
        <div style={{marginTop: '10px'}}>
          <StyledTag color="blue" variant='bordered' bold={true}>Styled Tag</StyledTag>
        </div>
      </section>
      <hr />
      <section style={{marginTop: '10px'}}>
        <h2>WH-TEST-FE-2 StyledBreadCrumb</h2>
        <div style={{marginTop: '10px'}}>
          <StyledBreadCrumb showArrow={true}/>
        </div>

        <div style={{marginTop: '10px'}}>
          <StyledBreadCrumb showArrow={true} onBack={() => alert('Back Pressed')}/>
        </div>

        <div style={{marginTop: '10px'}}>
          <StyledBreadCrumb breadCrumbs={crumbs}/>
        </div>

        <div style={{marginTop: '10px'}}>
          <StyledBreadCrumb breadCrumbs={crumbs2}/>
        </div>
      </section>
    </div>
  );
}

export default App;

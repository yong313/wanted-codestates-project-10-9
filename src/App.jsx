import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GlobalStyles from './GlobalStyles';
import Main from './pages/Main';
import AddReview from './pages/AddReview';
import styled from 'styled-components';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ReviewDetail from './pages/ReviewDetail';

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Wrapper>
        <Container>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/review-detail" element={<ReviewDetail />} />
            <Route path="/addreview" element={<AddReview />} />
          </Routes>
        </Container>
      </Wrapper>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </Router>
  );
}

export default App;

const Wrapper = styled.div`
  width: 100vw;
  /* height: 100vh; */
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Container = styled.div`
  width: 100%;
  height: 100%;
  max-width: 500px;
  /* background-color: pink; */
`;

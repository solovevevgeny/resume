import Accounts from "./components/Accounts";
import Transactions from "./components/Transactions";
import TotalBalance from "./components/TotalBalance";
import FormAddTransaction from "./components/FormAddTransaction";

import {Context} from "./context";

import { Layout } from 'antd';

const { Header, Footer, Content } = Layout;


const loadTransactions = () => {
  console.log('loadTransactions');
}


function App() {
  return (
    <Context.Provider value={{
      loadTransactions
    }}>
    <div className="App">
          <Layout>
            <Header>
              <TotalBalance />
            </Header>
            
            <Content>
              <Accounts />
              <Transactions />
              <FormAddTransaction />
            </Content>

            <Footer>Footer</Footer>
          </Layout>
    </div>
   </Context.Provider>

  );
}

export default App;

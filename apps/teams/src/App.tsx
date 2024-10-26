import { Banner, H1 } from '@mono/ui';
import { Button } from '@ui/components/ui/button';

type TProps = {
  instanceName: string;
};

const t: TProps = {
  instanceName: 'Teams'
};
console.log('🐔 =>  t:', t);

function App() {
  return (
    <>
      <div className='text-5xl'>Teams</div>
      <Banner instanceName='Teams' />
      <H1 />
      <Button>CC</Button>
    </>
  );
}

export default App;

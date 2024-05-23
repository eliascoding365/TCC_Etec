import CardVaga from "./components/CardVaga/CardVaga";
import Pagination from "./components/Pagination";
export default function Home() {
  return (
    <main className='flex items-center justify-center bg-slate-300'>
        <Pagination itemCount={100} pageSize={10 }currentPage={2}/>
        <CardVaga/>
    </main>
  );
}

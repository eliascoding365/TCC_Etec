import CardVaga from "./components/CardVaga/CardVaga";

export default function Home({ searchParams}: {searchParams: { page: string}}) {
  return (
    <main className='flex flex-col items-center justify-center bg-slate-100'>
        {/* <Component/> */}
        <CardVaga searchParams={searchParams}/>
    </main>
  );
}

const Main = ({Layout, pengaju}) => {
    return (
      <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
        <Layout pengaju={pengaju} />
      </main>
    )
}

export default Main
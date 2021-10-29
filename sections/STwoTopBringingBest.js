import Slide from 'react-reveal/Slide';

const SecondSection = () => {
  return (
    <section className="h-screen w-auto flex items-center overflow-x-hidden">
      <div className="mx-auto text-center space-y-6 w-4/5">
        <Slide left>
          <h1 className="font-sans tracking-tight uppercase break-words text-3xl 
                          mdlg:text-6xl  dark:text-gray-50">
            <span className="font-bold">Top </span> 
            <span className="text-3xl mdlg:text-6xl">logistics provider</span>
          </h1>
        </Slide>
        <h1 className="font-sans font-semibold pl-3 
            tracking-special uppercase break-words 
            text-5xl mdlg:text-9xl dark:text-gray-50">
              bringing
        </h1>
        <Slide right>
        <h1 className="font-sans tracking-special2 uppercase break-words text-5xl mdlg:text-6xl 
                      dark:text-gray-50">
          <span className="font-bold">best </span> 
          <span className="text-3xl mdlg:text-6xl">transportation</span>
        </h1>
        </Slide>
      </div>
    </section>
  )
}

export default SecondSection;

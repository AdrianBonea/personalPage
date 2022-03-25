export default function MainContent() {
  return (
    <section className="bg-[#373e98] h-[100vh] w-full " id="home">
      <div className="hidden">DarkMode </div>

      <div className="pt-[30vh] ">
        <div className="flex flex-wrap justify-center mx-10">
          <div className="leading-[5px]  text-white w-[770px]">
            <h1 className="text-6xl">
              <span className="link link-underline link-underline-pink">
                hello
              </span>
              , my name is&nbsp;
              <span className="text-[#f16775]">Adrian!</span>
            </h1>

            <br />
            <h1 className="text-2xl text-[#ceb92c]">
              i am a self-taught Front End Developer and here is my{" "}
              <span className="underline underline-offset-1 decoration-[#f16775]">
                portofolio
              </span>{" "}
              .
            </h1>
            <h2 className="text-2xl max-w-[52ch] leading-[25px] text-[#ceb92c] lowercase">
              <br />
              Here it is some dumy text until i find something better:
              <br />
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              commodo orci lectus, id efficitur arcu congue vitae. Sed fringilla
              magna quis egestas varius. Curabitur viverra vitae eros nec
              eleifend. Maecenas gravida, odio ac viverra scelerisque, sapien
              augue finibus lacus, non porta erat est vel erat. Aenean id purus
              sodales, laoreet magna at, convallis tellus. Vivamus ut hendrerit
              dolor, mattis dictum velit. Nunc vehicula sapien vitae laoreet
              vestibulum. Proin in ligula dolor. Duis posuere quam at ex
              eleifend hendrerit. Aenean suscipit ante lectus, ac dignissim
              neque commodo at. Suspendisse potenti. In molestie massa et erat
              fermentum tincidunt. Mauris leo quam, condimentum at lacinia a,
              venenatis id nisi. Nullam tincidunt velit neque, non imperdiet
              nunc ultrices quis.
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}

const headline1Url = new URL(
  '../../../assets/images/headline-1.png',
  import.meta.url
).toString();

const headline2Url = new URL(
  '../../../assets/images/headline-2.png',
  import.meta.url
).toString();

export default function Headline() {
  return (
    <div
      className={`flex w-full flex-col items-center justify-center gap-12 pt-12`}
    >
      <div className="flex w-full flex-col items-center gap-3 px-8 lg:gap-0 lg:px-0">
        <span className="text-center font-unbounded text-h3 lg:text-h1">
          Delegate <span className="text-primary">your votes</span>
        </span>
        <span className="px-3 text-center text-body">
          No time to vote? Keep Polkadot running smoothly by delegating to an
          expert.
        </span>
      </div>

      <div className="flex w-full gap-32 px-6 xl:px-28">
        <div className="flex w-full items-center gap-2 px-4 lg:gap-4 lg:px-0">
          <img width={200} src={headline1Url} alt="Headline image 1" />
          <div className="flex w-full flex-col gap-1">
            <span className="text-h6 font-semibold">Make your vote count</span>
            <span className="text-body-2">
              All DOT holders can participate in governance. You can also
              appoint a representative with expertise to delegate your votes to,
              as and when you please.
            </span>
          </div>
        </div>
        <div className="flex w-full items-center gap-2 px-4  lg:gap-4 lg:px-0">
          <img width={200} src={headline2Url} alt="Headline image 1" />
          <div className="flex w-full flex-col gap-1">
            <span className="text-h6 font-semibold">Engage in governance</span>
            <span className="text-body-2">
              Even when delegating your vote, you remain in full control. At any
              time, you can change delegates or take back your voting power
              completely.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

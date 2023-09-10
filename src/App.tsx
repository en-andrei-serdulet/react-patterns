import IntroToRerenders from "./chapter-1/intro-to-rerenders";

enum Agenda {
  CHAPTER_1_INTRO_TO_RERENDERS = "chapter-1/intro-to-rerenders",
}

const App = () => {
  const getChapter = (chapter: string, lesson: string) => {
    switch (`${chapter}/${lesson}`) {
      case Agenda.CHAPTER_1_INTRO_TO_RERENDERS:
        return <IntroToRerenders title="Intro To Rerenders" />;

      default:
        return <>Advanced React</>;
    }
  };

  return <>{getChapter("chapter-1", "intro-to-rerenders")}</>;
};

export default App;

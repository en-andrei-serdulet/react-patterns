import IntroToRerenders from "./chapter-1/intro-to-rerenders";
import ElementsChildrenAsPropsRerenders from "./chapter-2/elements-children-as-props-rerenders";

enum Agenda {
  CHAPTER_1_INTRO_TO_RERENDERS = "chapter-1/intro-to-rerenders",
  CHAPTER_2_ELEMENTS_CHILDREN_AS_PROPS_RERENDERS = "chapter-2/elements-children-as-props-rerenders",
}

const App = () => {
  const getChapter = (chapter: string, lesson: string) => {
    switch (`${chapter}/${lesson}`) {
      case Agenda.CHAPTER_1_INTRO_TO_RERENDERS:
        return <IntroToRerenders title="Intro To Rerenders" />;

      case Agenda.CHAPTER_2_ELEMENTS_CHILDREN_AS_PROPS_RERENDERS:
        return (
          <ElementsChildrenAsPropsRerenders title="Elements, Children as Props, Re-renders" />
        );

      default:
        return <>Advanced React</>;
    }
  };

  return <>{getChapter("chapter-2", "elements-children-as-props-rerenders")}</>;
};

export default App;

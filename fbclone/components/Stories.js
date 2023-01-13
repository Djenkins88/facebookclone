const stories = [
    {
        name: "Sonny Sangna",
        src: "https://links.papareact.com/zot",
        profile: "https://linls.papareact.com/l4v",
    },
    {
        name: "Elon Musk",
        src: "https://links.papareact.com/4zn",
        profile: "https://linls.papareact.com/kxk",
    },
    {
        name: "Jeff Bezos",
        src: "https://links.papareact.com/k2j",
        profile: "https://linls.papareact.com/f0o",
    },
    {
        name: "Mark Zuckerberg",
        src: "https://links.papareact.com/zql",
        profile: "https://linls.papareact.com/snf",
    },
    {
        name: "Bill Gates",
        src: "https://links.papareact.com/4u4",
        profile: "https://linls.papareact.com/zvy",
    },
]

function Stories() {
  return (
    <div className="flex justify-center space-x-3 mx-auto ">
        {stories.map((story) => {
            <StoryCard name={story.name} src={story.src} profile={story.profile} />
        })}

    </div>
  )
}

export default Stories
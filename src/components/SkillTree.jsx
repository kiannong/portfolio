const SkillCard = ({image, title, className = ''}) => {
    return (
        <div className={`rounded-lg bg-secondary py-10 px-12 ${className}`}>
            <div className={'w-full h-3/4 flex items-center'}>
                <img src={image} alt={title}/>
            </div>
            <h5 className='text-center mt-3'>{title}</h5>
        </div>
    );
}

const SkillTree = () => {
    /**
     * eager: true = VITE will immediately import and return the URLs
     * */
    const images = import.meta.glob(
      '../assets/images/*.png', { eager: true }
    );

    /**
     * Object.entries(images) = converts an object into an array of [key, value] pairs
     * like this:
     *
     * [
     *   ['./assets/images/html.png', { default: '/assets/images/html.png' }],
     *   ['./assets/images/css.png', { default: '/assets/images/css.png' }],
     * ]
     *
     * .reduce((acc, [path, module]) => { ... }, {}) = loops through each [path, module]
     * pair and builds a new project (acc = accumulator)
     *
     * path.split('/').pop(); = gets filename
     */
    const imageMap = Object.entries(images).reduce((acc, [path, module]) => {
        const filename = path.split('/').pop();
        acc[filename] = module.default || module;
        return acc;
    }, {});

    const skills = [
        {image: 'html.png', title: 'HTML'},
        {image: 'css.png', title: 'CSS'},
        {image: 'bootstrap.png', title: 'Bootstrap'},
        {image: 'tailwindcss.png', title: 'Tailwind'},
        {image: 'js.png', title: 'JavaScript'},
        {image: 'reactjs.png', title: 'React JS'},
        {image: 'php.png', title: 'PHP'},
        {image: 'laravel.png', title: 'Laravel'},
        {image: 'mysql.png', title: 'MySQL'},
    ];

    const rowCounts = [4, 3, 2, 1];
    let index = 0;
    let gridColsClass = {
        1: 'grid-cols-1',
        2: 'lg:grid-cols-2',
        3: 'lg:grid-cols-3',
        4: 'lg:grid-cols-4',
    };
    const widthMap = {
        1: 'lg:w-[15rem]',
        2: 'lg:w-[30rem]',
        3: 'lg:w-[45rem]',
        4: 'lg:w-[60rem]',
    };

    return (
        <div className='space-y-6'>
            {rowCounts.map((count, rowId) => {
                const rowItems = skills.slice(index, index + count);
                index += count;

                return (
                  <div key={rowId} className={`grid ${gridColsClass[count]} gap-6 mx-auto w-[15rem] ${widthMap[count]}`}>
                      {rowItems.map((skill, skillId) => {
                        return (
                            <SkillCard key={skillId} image={imageMap[skill.image]} title={skill.title}/>
                        );
                      })}
                  </div>
                );
            })}
        </div>
    );
}

export default SkillTree;
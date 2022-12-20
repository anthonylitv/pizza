import ContentLoader from "react-content-loader"

const SkeletonKategory = () => (
    <ContentLoader
        speed={0.5}
        width={114}
        height={47}
        viewBox="0 0 114 47"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
    >
        <rect x="38" y="306" rx="0" ry="0" width="228" height="46" />
        <rect x="42" y="374" rx="0" ry="0" width="41" height="24" />
        <rect x="208" y="374" rx="0" ry="0" width="55" height="27" />
        <rect x="104" y="374" rx="0" ry="0" width="41" height="27" />
        <rect x="37" y="418" rx="0" ry="0" width="107" height="68" />
        <rect x="162" y="419" rx="0" ry="0" width="105" height="68" />
        <rect x="3" y="7" rx="0" ry="0" width="94" height="31" />
    </ContentLoader>
)

export default SkeletonKategory

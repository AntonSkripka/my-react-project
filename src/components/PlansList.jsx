import PlanItem from "./PlanItem"

const localImages = require.context("../images", true, /\.(avif|gif|jpe?g|png|svg|webp)$/i)

function resolveImageUrl(imageUrl) {
    if (!imageUrl?.startsWith("../images/")) {
        return imageUrl
    }

    const imagePath = `./${imageUrl.slice("../images/".length)}`
    return localImages(imagePath)
}

export default function PlansList({ items }) {
    console.log(items);
    return (
        <ul>
            {items.map((item) =>
                <li
                    key={item.id}
                    // key={index}
                >
                    <PlanItem
                        url={item.url.main}
                        promotialUrl = {item.url.promotional}
                        realUrl={resolveImageUrl(item.url.actual)}

                        title={item.name.brief}
                        fullTitle={item.name.full}
                        nickname={item.name.nickname}

                        country={item.info.country}
                        type={item.info.type}
                        description={item.info.description}
                        price={item.info.price}
                        year={item.info.year}
                    />
                </li>)};
        </ul>
    )
}
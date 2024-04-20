import SectionPreview from "../../components/section-preview";
import { AppLayout } from "../../layouts/AppLayout";
import { SecctionHeaderType } from "../../services/services";
import { useLoaderData } from "react-router-dom";

export function AboutView() {
    const aboutUs = useLoaderData() as SecctionHeaderType

    return <AppLayout>
        <SectionPreview
            images={aboutUs.photos}
            subTitle="About Us"
            title={<span dangerouslySetInnerHTML={{ __html: aboutUs.title }}></span>}
            learnMoreUrl=""
            content={aboutUs.content}
            reverse={false}
        />
    </AppLayout>
}
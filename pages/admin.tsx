import LayoutSection from '../components/LayoutSection'
import Header from '../components/Header'
import LayoutHeader from '../components/LayoutHeader'
import SideNav from '../components/admin/SideNav'

export default function Admin() {
    return (
        <>
            <Header size="sm" />
            <LayoutSection>
                <div className="text-5xl text-slate-600 font-bold">
                    Administration
                </div>
                <div className="grid grid-cols-6 gap-x-4 mt-8">
                    <div className="col-span-1">
                        <SideNav />
                    </div>
                    <div>
                        <div className="text-2xl text-slate-600 font-semibold">
                            Blog Posts
                        </div>
                    </div>
                </div>
            </LayoutSection>
        </>
    )
}
import { getUser } from "@workos-inc/authkit-nextjs"
import { WorkOS } from "@workos-inc/node"

type PageProps = {
    params: {
        orgId: string;
    }
}

export default async function NewListingForOrgPage(props:PageProps) {
    const {user} = await getUser()
    const workos = new WorkOS(process.env.WORKOS_API_KEY)
    if (!user) {
        return 'Pleas logIn'
    }
    const orgId = props.params.orgId
    const oms = workos.userManagement.listOrganizationMemberships({userId:user.id, organizationId:orgId})
    const hasAccess = (await oms).data.length > 0

    if (!hasAccess) {
        return 'no access'
    }


    return (
        <form 
            action=''
            className="container">
            <input className="border p-2" placeholder="job title" type="text" />
        </form>
    )
}
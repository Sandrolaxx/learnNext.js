import Button from "../components/Button";
import Form from "../components/Form";
import Layout from "../components/Layout";
import Table from "../components/Table";
import useUsers from "../hooks/useUsers";

export default function Home() {

    const { 
        user,
        users,
        newUser,
        saveUser,
        deleteUser,
        selectUser,
        showTable, 
        isVisibleTable
    } = useUsers();

    return (
        <div className={`
        flex h-screen justify-center items-center
        bg-gradient-to-r from-blue-500 to-purple-500
        `}>
            <Layout title="Simple Registration" >
                {isVisibleTable ? (
                    <>
                        <div className="flex justify-end">
                            <Button color="green" className="mb-4"
                                onClick={newUser}>
                                New User
                            </Button>
                        </div>
                        <Table
                            users={users}
                            selectedUser={selectUser}
                            deletedUser={deleteUser}
                        />
                    </>
                ) : (
                    <Form
                        user={user}
                        userChanged={saveUser}
                        canled={showTable}
                    />
                )}
            </Layout>
        </div>
    )
}


export function GET(request: Request) {
    const data = [{
        component: "view",
        name: "container",
        props: {
            style: {
                flex: 1,
                backgroundColor: "#347398",
                justifyContent: "center",
                alignItems: "center"
            },
        },
        children: [{
            component: "view",
            name: "circle",
            children: [{
                component: "text",
                name: "heading",
                props: {
                    style: {
                        color: "#fff",
                        fontSize: 20,
                    },
                },
                content: "Hello"
            }],
            props: {
                style: {
                    borderWidth: 10,
                    borderColor: "black",
                    width: 300,
                    aspectRatio: 1,
                    borderRadius: 150,
                    justifyContent: "center",
                    alignItems: "center",
                }
            }
        }]
    }]
    return Response.json(data);
}
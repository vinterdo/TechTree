function initTree(treeName, nodes) {
    var graph = go.GraphObject.make;

    var myDiagram =
        graph(go.Diagram, "tree" + treeName,
            {
                initialContentAlignment: go.Spot.Center,
                "undoManager.isEnabled": true,
                layout: graph(go.TreeLayout,
                    {angle: 90, layerSpacing: 35})
            });

    myDiagram.nodeTemplate =
        graph(go.Node, "Vertical",
            {background: "#44CCFF"},
            graph(go.TextBlock, "Default Text",
                {margin: 5, stroke: "white", font: "bold 16px sans-serif"},
                new go.Binding("text", "name")),
            graph(go.TextBlock, "Default Text",
                {margin: 3, stroke: "white", font: "10px sans-serif"},
                new go.Binding("text", "description")),
            graph(go.TextBlock, "Default Text",
                {margin: 3, stroke: "white", font: "10px sans-serif"},
                new go.Binding("text", "production")),
            graph(go.TextBlock, "Default Text",
                {margin: 3, stroke: "white", font: "10px sans-serif"},
                new go.Binding("text", "cost"))
        );

    myDiagram.linkTemplate =
        graph(go.Link,
            {routing: go.Link.Orthogonal, corner: 5},
            graph(go.Shape, {strokeWidth: 3, stroke: "#555"}),
            graph(go.Shape, {toArrow: "Standard", stroke: null})
        );

    var model = graph(go.TreeModel);
    model.nodeDataArray = nodes;
    myDiagram.model = model;

    return myDiagram;
}

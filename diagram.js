function initTree(treeName, nodes) {
    var $ = go.GraphObject.make;

    var myDiagram =
        $(go.Diagram, "tree" + treeName,
            {
                initialContentAlignment: go.Spot.Center, // center Diagram contents
                "undoManager.isEnabled": true, // enable Ctrl-Z to undo and Ctrl-Y to redo
                layout: $(go.TreeLayout, // specify a Diagram.layout that arranges trees
                    {angle: 90, layerSpacing: 35})
            });

// the template we defined earlier
    myDiagram.nodeTemplate =
        $(go.Node, "Vertical",
            {background: "#44CCFF"},
            $(go.TextBlock, "Default Text",
                {margin: 5, stroke: "white", font: "bold 16px sans-serif"},
                new go.Binding("text", "name")),
            $(go.TextBlock, "Default Text",
                {margin: 3, stroke: "white", font: "10px sans-serif"},
                new go.Binding("text", "description")),
            $(go.TextBlock, "Default Text",
                {margin: 3, stroke: "white", font: "10px sans-serif"},
                new go.Binding("text", "production")),
            $(go.TextBlock, "Default Text",
                {margin: 3, stroke: "white", font: "10px sans-serif"},
                new go.Binding("text", "cost"))
        );

// define a Link template that routes orthogonally, with no arrowhead
    myDiagram.linkTemplate =
        $(go.Link,
            {routing: go.Link.Orthogonal, corner: 5},
            $(go.Shape, {strokeWidth: 3, stroke: "#555"}),
            $(go.Shape, {toArrow: "Standard", stroke: null})
        ); // the link shape

    var model = $(go.TreeModel);
    model.nodeDataArray = nodes;
    myDiagram.model = model;
}
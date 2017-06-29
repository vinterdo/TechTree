function init() {
    var $ = go.GraphObject.make;

    var myDiagram =
        $(go.Diagram, "myDiagramDiv",
            {
                initialContentAlignment: go.Spot.Center, // center Diagram contents
                "undoManager.isEnabled": true, // enable Ctrl-Z to undo and Ctrl-Y to redo
                layout: $(go.TreeLayout, // specify a Diagram.layout that arranges trees
                    {angle: 90, layerSpacing: 35})
            });

// the template we defined earlier
    myDiagram.nodeTemplate =
        $(go.Node, "Horizontal",
            {background: "#44CCFF"},
            $(go.Picture,
                {margin: 10, width: 50, height: 50, background: "red"},
                new go.Binding("source")),
            $(go.TextBlock, "Default Text",
                {margin: 12, stroke: "white", font: "bold 16px sans-serif"},
                new go.Binding("text", "name"))
        );

// define a Link template that routes orthogonally, with no arrowhead
    myDiagram.linkTemplate =
        $(go.Link,
            {routing: go.Link.Orthogonal, corner: 5},
            $(go.Shape, {strokeWidth: 3, stroke: "#555"}),
            $(go.Shape, {toArrow: "Standard", stroke: null})
        ); // the link shape

    var model = $(go.TreeModel);
    model.nodeDataArray =
        [
            {key: "1", name: "Don Meow", source: "cat1.png"},
            {key: "2", parent: "1", name: "Demeter", source: "cat2.png"},
            {key: "3", parent: "1", name: "Copricat", source: "cat3.png"},
            {key: "4", parent: "3", name: "Jellylorum", source: "cat4.png"},
            {key: "5", parent: "3", name: "Alonzo", source: "cat5.png"},
            {key: "6", parent: "2", name: "Munkustrap", source: "cat6.png"}
        ];
    myDiagram.model = model;
}
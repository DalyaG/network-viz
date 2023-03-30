import {useRef, useEffect } from "react";

import { Network } from "vis-network";

import graphData from '../data/graph_data.json';

import "vis-network/styles/vis-network.css";

const options = {
    layout: {
        hierarchical: false,
        // hierarchical: {
        //     sortMethod: 'hubsize',  // hubsize, directed
        //     shakeTowards: 'leaves',  // roots, leaves
        //     direction: 'UD',   // UD, DU, LR, RL
        //     treeSpacing: 50
        // }
    },
    edges: {
      color: "gray"
    },
    physics:{
        enabled: false
    }
};

const getObjectsToSelect = (selectedNodes, selectedEdges) => {
    const nodeData = graphData.nodes.find(n => selectedNodes.includes(n.id))
    console.log(nodeData)
    if (nodeData && nodeData.path) {
        return nodeData.path;
    } 

    return ({
        nodes: selectedNodes,
        edges: selectedEdges
    })
}

const VisNetwork = () => {
	const visJsRef = useRef(null);
	useEffect(() => {
		const network =
			visJsRef.current &&
			new Network(visJsRef.current, { nodes: graphData.nodes, edges: graphData.edges }, options );
        network.on('select', ({nodes, edges}) => {
            console.log("Selected nodes:");
            console.log(nodes);
            console.log("Selected edges:");
            console.log(edges);

            const newSelection = getObjectsToSelect(nodes, edges);
            network.setSelection(newSelection, {highlightEdges: false})
        });
	}, [visJsRef]);

	return <div ref={visJsRef} style={{
        display: 'flex',
        height: '100%',
        width: '100%'
    }}/>;
};

export default VisNetwork;
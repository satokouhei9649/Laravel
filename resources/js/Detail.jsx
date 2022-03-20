

 export function Detail() {
    const currentUrl = new URL(location.href);
    const queryString = currentUrl.searchParams;
    const receivedParams = [];
    queryString.forEach(function(value,name){
        receivedParams.push({
            name: name,
            value: value
        })
    });
    console.log(receivedParams);
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">Example Component</div>
                        <div className="card-body">I'm an example component!</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

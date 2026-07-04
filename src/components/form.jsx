export default function Form({cv, saveChangeInput, handleClickSubmit, handleResetClick}) {
    return (
        <>
            <form onSubmit={handleClickSubmit} onReset={handleResetClick}>
                <fieldset>
                    <legend>General Information</legend>
                    <label>
                        Name:
                        <input type="text" placeholder="Ex: Oliver Queen" value={cv.name} id="name" required onChange={(event) => {saveChangeInput(event.target.value, event.target.id)}}/>
                    </label>
                    <label>
                        Email:
                        <input type="email" placeholder="Ex: oliverqueen@arrow.com" value={cv.email} id="email" required onChange={(event) => {saveChangeInput(event.target.value, event.target.id)}}/>
                    </label>
                    <label>
                        Phone:
                        <input type="tel" placeholder="+1 (111) 111-1111" value={cv.phone} id="phone" required onChange={(event) => {saveChangeInput(event.target.value, event.target.id)}}/>
                    </label>
                </fieldset>
                <button type="reset">Reset</button>
                <button type="submit">Submit</button>
            </form>
        </>
    )
}


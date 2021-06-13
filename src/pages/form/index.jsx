import { Grid, Button } from '@material-ui/core';
import React from 'react';
import Logo from '../../components/logo';
import Title from '../../components/title';
import { useStyles } from './styles'

function Forms() {
    const classes = useStyles()
    return (
        <Grid container spacing={2}>
            <Grid item xs={12} style={{ textAlign: "center" }}>
                <Logo />
            </Grid>
            <Grid item xs={12}>
                <Title>
                    Silva Lanches
                </Title>
            </Grid>
            <Grid item xs={12}>
                <div className={classes.label}>
                    Nome do prato
                </div>
                <input placeholder='Prato' className={classes.inputs} />
            </Grid>
            <Grid item xs={12}>
                <div className={classes.label}>
                    Valor
                </div>
                <input defaultValue="0,00" className={classes.inputs} type="number" min="0.00" max="10000.00" step="0.01" />
            </Grid>
            <Grid item xs={12}>
                <div className={classes.label}>
                    Descrição do prato
                </div>
                <textarea placeholder='Insira uma descrição' className={classes.text_area} />
                <div className={classes.obs}>
                    *A descrição deve conter até 200 caracteres
                </div>
            </Grid>
            <Grid item xs={12}>
                <Button className={classes.button_save}>
                    Salvar
                </Button>
            </Grid>
        </Grid>
    )
}

export default Forms;